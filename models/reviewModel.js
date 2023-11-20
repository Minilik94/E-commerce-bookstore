const mongoose = require('mongoose')
const Book = require('./bookModel')

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

reviewSchema.index({ user: 1, book: 1 }, { unique: true })

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

reviewSchema.statics.calcAverageRatings = async function (bookId) {
    console.log(`Book Id ${bookId}`);

    const stats = await this.aggregate([
        {
            $match: { book: bookId }
        },
        {
            $group: {
                _id: '$book',
                nRating: { $sum: 1 },
                avgRating: { $avg: '$rating' }
            }
        }
    ])

    console.log(stats)
    if (stats.length > 0) {
        await Book.findByIdAndUpdate(bookId, {
            ratingQuantity: stats[0].nRating,
            ratingAverage: stats[0].avgRating
        })
        // console.log(now)
    } else {
        await Book.findByIdAndUpdate(bookId, {
            ratingsQuantity: 0,
            ratingsAverage: 0
        })
    }
}

reviewSchema.post('save', function () {
    console.log(`${this.book} from post`);
    this.constructor.calcAverageRatings(this.book)
})

reviewSchema.pre(/^findOneAnd/, async function (next) {
    this.r = await this.findOne()
    console.log(this.r);
    next()
});

reviewSchema.post(/^findOneAnd/, async function() {
    await this.r.constructor.calcAverageRatings(this.r.book)
})

const Review = mongoose.model('Review', reviewSchema)
module.exports = Review
