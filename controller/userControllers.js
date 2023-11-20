const User = require('../models/userModel')
const factoryHandler = require('./handlerFactory')

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
                status: false,
                message:
                    "You can't update the password here, please use /api/users/resetPassword"
            })
        }

        // 2) Update document
        const filteredBody = filtedObj(req.body, 'name', 'email')
        const updatedUser = await User.findByIdAndUpdate(
            req.user.id,
            filteredBody,
            {
                new: true,
                runValidator: true
            }
        )

        res.status(200).json({
            status: true,
            user: updatedUser
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: `Something went wrong ${error.message}`
        })
    }
}

exports.deleteMe = async (req, res, next) => {
    try {
        await User.findByIdAndUpdate(req.user.id, {active: false})
        res.status(204).json({
            status: true
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: `Something went wrong ${error.message}`
        })
    }
}

exports.getMe = async (req, res, next) => {
    req.params.id = req.user.id
    next()
}

exports.getUser = factoryHandler.getOne(User, {path: 'reviews'})

exports.createUser = async (req, res) => {
    res.status(500).json({
        status: 'success',
        message: 'This route is not gonna be implemented please use /signup'
    })
}

exports.updateUser = factoryHandler.updateOne(User)
exports.deleteUser = factoryHandler.deleteOne(User)
