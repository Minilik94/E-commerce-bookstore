const User = require('../models/userModel')

const filtedObj = function (body, ...allowedFields) {
    const filtedData = {}
    Object.keys(body).forEach((fields) => {
        if (allowedFields.includes(fields)) {
            filtedData[fields] = body[fields]
        }
    })
    return filtedData
}

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find()

        res.status(200).json({
            status: 'success',
            results: users.length,
            data: {
                users
            }
        })
    } catch (error) {
        res.status(404).json({
            status: 'error',
            message: error.message
        })
    }
}

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

exports.getUser = async (req, res) => {
    res.status(500).json({
        status: 'success',
        message: 'This route is not yet implemented'
    })
}

exports.createUser = async (req, res) => {
    res.status(500).json({
        status: 'success',
        message: 'This route is not yet implemented'
    })
}

exports.updateUser = async (req, res) => {
    res.status(500).json({
        status: 'success',
        message: 'This route is not yet implemented'
    })
}

exports.deleteUser = async (req, res) => {
    res.status(500).json({
        status: 'success',
        message: 'This route is not yet implemented'
    })
}
