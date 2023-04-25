const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require("bcryptjs")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please tell us your name"]
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: [true, "Please provide your email address"], 
        validate: [validator.isEmail, "Please provide your email address"]
    },
    photo: String,
    password: {
        type: String,
        required: [true, "Please provide a password"],
        minlength: 8
    },
    passwordConfirm: {
        type: String,
        required: [true, "Please confirm your password"]
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User