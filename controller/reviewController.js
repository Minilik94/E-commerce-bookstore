const Review = require('../models/reviewModel')
const factoryHandler = require('./handlerFactory')

exports.getAllReviews = async (req, res, next) => {
    try {
        const filter = {}
        if (req.params.bookId)
            filter: {
                book: req.params.bookId
            }

        const books = await Review.find(filter)
        res.status(200).json({
            status: true,
            results: books.length,
            books
        })
    } catch (error) {
        console.error(error)
        res.status(404).json({
            status: false,
            message: error.message
        })
    }
}

exports.setBookUserId = async (req, res, next) => {
    if (!req.body.book) req.body.book = req.params.bookId
    if (!req.body.user) req.body.user = req.user.id

    next()
}

exports.createReview = factoryHandler.createOne(Review)
exports.getReview = factoryHandler.getOne(Review)
exports.getAllReviews = factoryHandler.getAll(Review)
exports.updateReview = factoryHandler.updateOne(Review)
exports.deleteReview = factoryHandler.deleteOne(Review)
