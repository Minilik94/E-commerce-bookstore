const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema(
    {
        rating: {
            type: Number,
            required: [true, 'A Review must have a rating']
        },
        review: {
            type: String,
            required: [true, 'A Review must have a comment']
        },
        createdAt: {
            type: Date,
            default: Date.now()
        },
        user: {
            type: mongoose.Schema.ObjectId,
            ref: 'User',
            required: [true, 'A Review must belong to a user']
        },
        book: {
            type: mongoose.Schema.ObjectId,
            ref: 'Book',
            required: [true, 'A Review must belong to a book']
        }
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
)

reviewSchema.pre(/^find/, function (next) {
    // this.populate({
    //     path: 'book',
    //     select: 'title author'
    // }).;
    this.populate({
        path: 'user',
        select: 'name'
    })

    next()
})

module.exports = mongoose.model('Review', reviewSchema)
