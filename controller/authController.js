const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const User = require('../models/userModel')
const sendEmail = require('../utils/email')
const { findOne } = require('../models/bookModel')

const signToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    })
}

const createSendToken = (user, statusCode, res) => {

    const token = signToken(user._id)

    const cookieOptions = {
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000),
        httpOnly: true
    }

    user.password = undefined

    if(process.env.NODE_ENVIRONMENT === 'production') cookieOptions.secure = true
    res.cookie('jwt', token, cookieOptions)

    res.status(statusCode).json({
        status: true,
        token, 
        data: {
            user
        }
    })
}

exports.signUp = async (req, res) => {
    try {
        const newUser = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            passwordConfirm: req.body.passwordConfirm
            // role: req.body.role
        })

        createSendToken(newUser, 201, res)
    } catch (error) {
        console.log(error);
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

        createSendToken(user, 200, res)

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
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({
                status: 'fail',
                message: 'You do not have permission to perform this action'
            })
        }
        next()
    }
}

exports.forgotPassword = async (req, res) => {
    // 1) check if user exist
    const user = await User.findOne({ email: req.body.email })
    console.log(user)

    if (!user) {
        return res.status(404).json({
            status: 'fail',
            message: 'There is no user with this email'
        })
    }

    // 2 GENERATE THE RANDOM RESET TOKEN
    const resetToken = user.createPasswordResetToken()
    await user.save({ validateBeforeSave: false })

    // 3) Send it to the users email
    const resetUrl = `${req.protocol}: //${req.get(
        'host'
    )}/api/users/resetPassword/${resetToken}`

    const message = `Fogot your password Submit a patch request with a new password and passwordConfirm to: \n${resetUrl}\nIf you didn't forgot you password,Please ignore this email`

    try {
        console.log(user.email)
        await sendEmail({
            email: user.email,
            subject: 'Your password reset token (valid for 10 min)',
            message
        })
        return res.status(200).json({
            status: 'success',
            message: 'Token sent to email'
        })
    } catch (error) {
        user.passwordResetToken = undefined
        user.passwordResetExpires = undefined
        await user.save({ validateBeforeSave: false })
        return res.status(500).json({
            status: 'fail',
            message:
                'There was a problem while sending an email, Please try again later'
        })
    }
}
exports.resetPassword = async (req, res, next) => {
    try {
        // 1) Get user based on token
        const hashedToken = crypto
            .createHash('sha256')
            .update(req.params.token)
            .digest('hex')
        const user = await User.findOne({
            passwordResetToken: hashedToken,
            passwordResetExpires: { $gt: Date.now() }
        })

        if (!user) {
            return res.status(400).json({
                status: false,
                message: 'Invalid token or the token has expired'
            })
        }
        // 2) if token did not expire update the password
        user.password = req.body.password
        user.passwordConfirm = req.body.passwordConfirm
        user.passwordResetToken = undefined
        user.passwordResetExpires = undefined
        await user.save()
        // 3) send jwt
        const token = signToken(user._id)
        res.status(200).json({
            status: true,
            token
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: `Something went wrong ${error.message}`
        })
    }
}

exports.updatePassword = async (req, res, next) => {
    try {
        // 1) Get user
        const user = await User.findById(req.user.id).select('+password')
        console.log(user)
        if (
            !(await user.correctPassword(
                req.body.passwordCurrent,
                user.password
            ))
        ) {
            return res.status(401).json({
                status: false,
                message: 'Your password is incorrect'
            })
        }
        user.password = req.body.password
        user.passwordConfirm = req.body.passwordConfirm
        await user.save()

        const token = signToken(user._id)
        res.status(200).json({
            status: true,
            token
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: `Something went wrong ${error.message}`
        })
    }
}
