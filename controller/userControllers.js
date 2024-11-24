const multer = require('multer')
const sharp = require('sharp')
const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const factoryHandler = require('./handlerFactory')
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const dotenv = require("dotenv");


// const multerStorage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'client/static/users')
//     },
//     filename: (req, file, cb) => {
//         const ext = file.mimetype.split('/')[1] // this is extenstion like .jpeg or jpg
//         cb(null, `user-${req.user.id}-${Date.now()}.${ext}`)
//     }
// })

dotenv.config({ path: "./config.env" });


const s3 = new S3Client({
    region: 'eu-north-1',
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_KEY
    }
});


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

exports.uploadUserPhoto = upload.single('photo')

exports.resizeImage = async (req, res, next) => {
    if (!req.file) return next()

    const file = req.file

    console.log(file, 'from user photo')
    const fileName = req.file.filename = `user-${req.user.id}-${Date.now()}.jpeg`

    const buffer = await sharp(file.buffer)
        .resize(500, 500)
        .toFormat('jpeg')
        .jpeg({ quality: 90 })
        .toBuffer();

    // await sharp(req.file.buffer)
    //     .resize(500, 500)
    //     .toFormat('jpeg')
    //     .jpeg({ quality: 90 })
    //     .toFile(`client/static/users/${req.file.filename}`)

    const uploadParams = {
        Bucket: 'rebook',  // Your S3 bucket name
        Key: `users/${fileName}`,  // Folder and file name in S3
        Body: buffer,  // File buffer
        ContentType: 'image/jpeg',
    };

    try {
        // Upload the image to S3
        const data = await s3.send(new PutObjectCommand(uploadParams));
        console.log('Image uploaded successfully:', data);
        req.body.photo = fileName;  // Save the S3 file name to the book document
        next();
    } catch (error) {
        console.error('Error uploading image to S3:', error);
        res.status(500).json({ error: 'Error uploading image to S3.' });
    }

}

const filtedObj = function (body, ...allowedFields) {
    const filtedData = {}
    Object.keys(body).forEach((fields) => {
        if (allowedFields.includes(fields)) {
            filtedData[fields] = body[fields]
        }
    })
    return filtedData
}

exports.getAllUsers = factoryHandler.getAll(User)

exports.updateMe = async (req, res, next) => {
    try {
        if (req.body.password || req.body.passwordConfirm) {
            return res.status(400).json({
                status: 'fail',
                message:
                    "You can't update the password here, please use /api/users/resetPassword"
            })
        }

        // 2) Update document
        const filteredBody = filtedObj(req.body, 'name', 'email')
        if (req.file) filteredBody.photo = req.file.filename

        const updatedUser = await User.findByIdAndUpdate(
            req.user.id,
            filteredBody,
            {
                new: true,
                runValidator: true
            }
        )

        res.status(200).json({
            status: 'success',
            user: updatedUser
        })
    } catch (error) {
        return res.status(500).json({
            status: 'fail',
            message: `Something went wrong ${error.message}`
        })
    }
}

exports.deleteMe = async (req, res, next) => {
    try {
        await User.findByIdAndUpdate(req.user.id, { active: false })
        res.status(204).json({
            status: 'success'
        })
    } catch (error) {
        return res.status(500).json({
            status: 'fail',
            message: `Something went wrong ${error.message}`
        })
    }
}

exports.getMe = async (req, res, next) => {
    req.params.id = req.user.id
    next()
}

exports.getUser = factoryHandler.getOne(User, { path: 'reviews' })

exports.getByToken = async (req, res, next) => {
    try {
        console.log(process.env.JWT_SECRET)
        // Get token from the request headers or cookies
        const token = req.headers.authorization.split(' ')[1]
        console.log(token)
        // Verify the token
        const decoded = await jwt.verify(token, process.env.JWT_SECRET)

        // Use the decoded information to get the user
        const user = await User.findById(decoded.id)

        if (!user) {
            return res.status(404).json({
                status: 'fail',
                message: 'User not found'
            })
        }

        res.status(200).json({
            status: 'success',
            user
        })
    } catch (error) {
        console.error('Error decoding token:', error)

        return res.status(401).json({
            status: 'fail',
            message: 'Invalid token'
        })
    }
}

exports.createUser = async (req, res) => {
    res.status(500).json({
        status: 'success',
        message: 'This route is not gonna be implemented please use /signup'
    })
}

exports.updateUser = factoryHandler.updateOne(User)
exports.deleteUser = factoryHandler.deleteOne(User)
