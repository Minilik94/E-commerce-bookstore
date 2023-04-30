const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please tell us your name']
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: [true, 'Please provide your email address'],
        validate: [validator.isEmail, 'Please provide your email address']
    },
    photo: String,
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength: 8
    },
    passwordConfirm: {
        type: String,
        required: [true, 'Please confirm your password'],
        validate: {
            validator: function (el) {
                return el === this.password
            },
            message: 'Passwords are not the same'
        },
        select: false
    },
    passwordChangedAt: Date
})

userSchema.pre('save', async function (next) {
    // Run only If password is modefied
    if (!this.isModified('password')) return next()

    this.password = await bcrypt.hash(this.password, 12)
    //   Delete the password confirm field
    this.passwordConfirm = undefined
    next()
})

userSchema.methods.correctPassword = async function (
    candidatePassword,
    userPassword
) {
    return await bcrypt.compare(candidatePassword, userPassword)
}

userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  let changedTimestamp
    if (this.passwordChangedAt) {
         changedTimestamp = parseInt(this.passwordChangedAt.getTime() / 1000, 10)
        console.log(changedTimestamp)
    }

    return JWTTimestamp < changedTimestamp
}

const User = mongoose.model('User', userSchema)

module.exports = User
