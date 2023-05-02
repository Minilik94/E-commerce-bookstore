const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const signToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    })
}

exports.signUp = async (req, res) => {
    try {
        const newUser = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            passwordConfirm: req.body.passwordConfirm,
            role: req.body.role
        })

        const token = signToken(newUser._id)

        res.status(201).json({
            status: 'success',
            token,
            data: {
                user: newUser
            }
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error.message
        })
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({
                status: 'fail',
                message: 'Please provide email and password'
            })
        }

        const user = await User.findOne({ email }).select('+password')

        if (!user || !(await user.correctPassword(password, user.password))) {
            return res.status(401).json({
                status: false,
                message: 'Incorrect email or password'
            })
        }

        const token = signToken(user._id)
        res.status(200).json({
            status: true,
            token
        })
    } catch (error) {
        console.log(error.message)
        res.status(404).json({
            status: 'fail',
            message: error.message
        })
    }
}

// Protecting the book route

exports.protect = async (req, res, next) => {
    try {
        // 1) Check if the token exists
        let token
        if (
            req.headers.authorization &&
            req.headers.authorization.startsWith('Bearer')
        ) {
            token = req.headers.authorization.split(' ')[1]
        }
        if (!token) {
            return res.status(401).json({
                status: 'fail',
                message: 'You are not logged in! Please login'
            })
        }
        // 2) Verification of token
        const decoded = await jwt.verify(token, process.env.JWT_SECRET)
        console.log(decoded)

        // 3) Check if the user still exists
        const currentUser = await User.findById(decoded.id)
        if (!currentUser) {
            return res.status(401).json({
                status: 'fail',
                message: 'The user belonging to this token no longer exist'
            })
        }
        // 4) Check if the user changed the password after the token was issued
        if (currentUser.changedPasswordAfter(decoded.iat)) {
            return res.status(401).json({
                status: 'fail',
                message: 'User recently changed password. Please login again!'
            })
        }

        // Grant access to protected routes
        req.user = currentUser
        next()
    } catch (error) {
        console.log(error.message)
        // if (process.env.NODE_ENV === 'production') {
        //     if (error.name === 'JsonWebTokenError') {
        //         return res.status(401).json({
        //             status: 'fail',
        //             message: 'Invalid token Please login again!'
        //         })
        //     }
        //     if (error.name === 'TokenExpiredError') {
        //         return res.status(401).json({
        //             status: 'fail',
        //             message: 'Your token has expired please login again!'
        //         })
        //     }
        // }
        res.status(404).json({
            status: 'fail',
            message: error.message
        })
    }
}

exports.restrictTo = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes( req.user.role )) {
            return res.status(403).json({
                status: 'fail',
                message: 'You do not have permission to perform this action'
            })
        }
        next()
    }
}


exports.forgotPassword = async (req, res, next) => {}
exports.resetPassword = async (req, res, next) => {}