const { query } = require('express')
const Book = require('../models/bookModel')
const APIFeatures = require('../utils/apiFeatures')
const factoryHandler = require('./handlerFactory')
const multer = require('multer')
const sharp = require('sharp')
const AWS = require("aws-sdk")
const dotenv = require("dotenv");
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");

dotenv.config({ path: "./config.env" });


const s3 = new S3Client({
    region: 'eu-north-1',
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY,
      secretAccessKey: process.env.AWS_SECRET_KEY
    }
  });



exports.aliasTopBooks = (req, res, next) => {
    req.query.limit = '5'
    req.query.sort = '-ratingAverage, price'
    req.query.fields = 'name, ratingAverage, price, description, author'

    next()
}

// GET ALL THE BOOKS

// exports.getAllBooks = async (req, res) => {
// try {
// BUILD THE QUERY
// 1A) Filtering
// console.log(req.query)
// const queryObj = { ...req.query };

// const excludedFields = ["page", "sort", "limit", "fields"];
// excludedFields.forEach((el) => delete queryObj[el]);

// // 1B) ADVANCED FILTERING
// let queryStr = JSON.stringify(queryObj);
// queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

// console.log(JSON.parse(queryStr));
// let query = Book.find(JSON.parse(queryStr));

// 2) SORTING
// if (req.query.sort) {
//   const sortBy = req.query.sort.split(",").join(" ");
// console.log(sortBy);
//   query = query.sort(sortBy);
// } else {
//   query = query.sort("createdAt");
// }

// 3) FIELDS
// if (req.query.fields) {
//   const fields = req.query.fields.split(",").join(" ");
//   query = query.select(fields);
// } else {
//   query = query.select("-__v");
// }

// 4) PAGINATION
// const page = req.query.page * 1 || 1;
// const limit = req.query.limit * 1 || 100;
// const skip = (page - 1) * limit;

// query = query.skip(skip).limit(limit);

// if (req.query.page) {
//   const numPage = await Book.countDocuments();

//   if (skip >= numPage) throw new Error("This page does not exist");
// }

// EXECUTE THE QUERY
//         const features = new APIFeatures(Book.find(), req.query)
//             .filter()
//             .sort()
//             .limitFields()
//             .paginate()

//         const books = await features.query

//         // send response
//         res.status(200).json({
//             status: 'success',
//             result: books.length,
//             data: {
//                 books
//             }
//         })
//     } catch (error) {
//         console.log(error.message)
//         res.status(404).json({
//             status: 'fail',
//             error: `Something wrong with the server, ${error.message} `
//         })
//     }
// }

const multerStorage = multer.memoryStorage()

const multerFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image')) {
        cb(null, true)
    } else {
        const error = new Error(
            'Invalid file type. Only image files are allowed.'
        )
        error.statusCode = 400
        error.data = {
            message: 'Invalid file type. Only image files are allowed.'
        }
        cb(error, false)
    }
}

const upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter
})

exports.uploadBookImage = upload.fields([{ name: 'coverImage', maxCount: 1 }]);

// Resize the image and upload to S3

exports.resizeImage = async (req, res, next) => {
  if (!req.files || !req.files.coverImage) {
    return next();
  }

  const file = req.files.coverImage[0]; // The file uploaded via Multer
  const fileName = `book-${req.params.id}-${Date.now()}-cover.jpeg`;
  const buffer = await sharp(file.buffer)
    .resize(1000, 1333)
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toBuffer();

  // Prepare the S3 upload command
  const uploadParams = {
    Bucket: 'rebook',  // Your S3 bucket name
    Key: `books/${fileName}`,  // Folder and file name in S3
    Body: buffer,  // File buffer
    ContentType: 'image/jpeg',
  };

  try {
    // Upload the image to S3
    const data = await s3.send(new PutObjectCommand(uploadParams));
    console.log('Image uploaded successfully:', data);
    req.body.coverImage = fileName;  // Save the S3 file name to the book document
    next();
  } catch (error) {
    console.error('Error uploading image to S3:', error);
    res.status(500).json({ error: 'Error uploading image to S3.' });
  }
};

exports.getAllBooks = factoryHandler.getAll(Book)
exports.getBook = factoryHandler.getOne(Book, { path: 'reviews' })
exports.createBook = factoryHandler.createOne(Book)
exports.updateBook = factoryHandler.updateOne(Book)
exports.deleteBook = factoryHandler.deleteOne(Book)

exports.getBookStats = async (req, res) => {
    try {
        const stats = await Book.aggregate([
            {
                $match: { ratingAverage: { $gte: 4.5 } }
            },
            {
                $group: {
                    _id: { $toUpper: '$category' },
                    numBooks: { $sum: 1 },
                    numRating: { $sum: '$ratingQuantity' },
                    avgRating: { $avg: '$ratingAverage' },
                    avgPrice: { $avg: '$price' },
                    avgReview: { $avg: '$ratingQuantity' },
                    minPrice: { $min: '$price' },
                    maxPrice: { $max: '$price' }
                }
            }
        ])
        res.status(201).json({
            status: 'success',
            data: {
                stats
            }
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            error: `Something wrong with the server, ${error.message} `
        })
    }
}
