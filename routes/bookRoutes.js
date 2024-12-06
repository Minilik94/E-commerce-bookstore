const express = require('express')
const bookControllers = require('../controller/bookContorllers')
const orderController = require('../controller/orderController')
const reviewRouter = require('./reviewRoutes')
const authController = require('../controller/authController')

const router = express.Router()

// router
// .route('/:bookId/reviews')
// .post(
//     authController.protect,
//     authController.restrictTo('user'),
//     reviewController.createReview
// )

router.use('/:bookId/reviews', reviewRouter)

router.route('/bookStats').get(bookControllers.getBookStats)

router
    .route('/top-5-cheap')
    .get(bookControllers.aliasTopBooks, bookControllers.getAllBooks)

router
    .route('/')
    .get(bookControllers.getAllBooks, )
    .post(authController.protect, bookControllers.createBook)

router
    .route('/:id')
    .get(bookControllers.getBook)
    .patch(
        authController.protect,
        authController.restrictTo('admin'),
        bookControllers.uploadBookImage,
        bookControllers.resizeImage,
        bookControllers.updateBook
    )
    .delete(
        authController.protect,
        authController.restrictTo('admin'),
        bookControllers.deleteBook
    )

module.exports = router
