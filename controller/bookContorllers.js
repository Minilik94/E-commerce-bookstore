const { query } = require("express");
const Book = require("../models/bookModel");
const APIFeatures = require("../utils/apiFeatures");

exports.aliasTopBooks = (req, res, next) => {
  req.query.limit = "5";
  req.query.sort = "-ratingAverage, price";
  req.query.fields = "name, ratingAverage, price, description, author";

  next();
};

// GET ALL THE BOOKS

exports.getAllBooks = async (req, res) => {
  try {
    // BUILD THE QUERY
    // 1A) Filtering
    // console.log(req.query);
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
    //   console.log(sortBy);
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
    const features = new APIFeatures(Book.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();

    const books = await features.query;

    // send response
    res.status(200).json({
      status: "success",
      result: books.length,
      data: {
        books,
      },
    });
  } catch (error) {
    console.log(error.message);
    res.status(404).json({
      status: "fail",
      error: `Something wrong with the server, ${error.message} `
    });
  }
};

exports.getBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      res.status(404).json({
        status: false,
        message: "Book does not exist",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        book,
      },
    });
  } catch (error) {
    console.log(error.message);
    res.status(404).json({
      status: "fail",
      error: `Something wrong with the server, ${error.message} `,
    });
  }
};

// CREATE  A BOOK

exports.createBook = async (req, res) => {
  try {
    const existingBook = await Book.findOne({ name: req.body.title });
    if (existingBook) {
      return res.status(400).json({
        status: "fail",
        message: "A book with this name already exists",
      });
    }

    const newBook = await Book.create(req.body);

    if (!newBook) {
      req.status(404).json({
        status: false,
        message: "Book does not exist",
      });
    }

    res.status(201).json({
      status: "success",
      data: {
        newBook,
      },
    });
  } catch (error) {
    console.log(error.message);
    res.status(404).json({
      status: "fail",
      message: `Something Went Wrong ${error.message}`,
    });
  }
};

// UPDATE A BOOK

exports.updateBook = async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedBook) {
      res.status(404).json({
        status: "fail",
        message: "Book not found",
      });
    }

    res.status(200).json({
      status: "success",
      updatedBook,
    });
  } catch (error) {
    console.log(error.message);
    res.status(404).json({
      status: "fail",
      message: "Something Went Wrong",
    });
  }
};

// DELETE BOOK

exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error: "Something wrong with the server ",
    });
  }
};

exports.getBookStats = async (req, res) => {
  try {
    const stats = await Book.aggregate([
      {
        $match: { ratingAverage: { $gte: 4.5 } },
      },
      {
        $group: {
          _id: { $toUpper: "$category" },
          numBooks: { $sum: 1 },
          numRating: { $sum: "$ratingQuantity" },
          avgRating: { $avg: "$ratingAverage" },
          avgPrice: { $avg: "$price" },
          avgReview: { $avg: "$ratingQuantity" },
          minPrice: { $min: "$price" },
          maxPrice: { $max: "$price" },
        },
      },
    ]);
    res.status(201).json({
      status: "success",
      data: {
        stats,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error: `Something wrong with the server, ${error.message} `,
    });
  }
};
