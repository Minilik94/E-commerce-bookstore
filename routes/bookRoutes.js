const express = require('express')
const Book = require('../models/bookModel')
const bookControllers = require('../controller/bookContorllers')
const authController = require('../controller/authController')

const router = express.Router()

router.route('/bookStats').get(bookControllers.getBookStats)
router
    .route('/top-5-cheap')
    .get(bookControllers.aliasTopBooks, bookControllers.getAllBooks)

router
    .route('/')
    .get(authController.protect, bookControllers.getAllBooks)
    .post(bookControllers.createBook)

router
    .route('/:id')
    .get(bookControllers.getBook)
    .patch(bookControllers.updateBook)
    .delete(
        authController.protect,
        authController.restrictTo('admin','user'),
        bookControllers.deleteBook
    )

module.exports = router
