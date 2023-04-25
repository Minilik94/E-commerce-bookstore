const User = require('../models/userModel')

exports.signUp = async (req, res) => {
    try {
        const newUser = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            passwordConfirm: req.body.passwordConfirm
        })

        res.status(201).json({
            status: 'success', 
            data: {
                user: newUser
            }
        })
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: `Something went wrong ${error.message}`
        })
    }
}