const express = require('express')
const reviewController = require('../controller/reviewController')
const authController = require('../controller/authController')

const router = express.Router({ mergeParams: true })

router
    .route('/')
    .get(reviewController.getAllReviews)
    .post(
        authController.protect,
        authController.restrictTo('user'),
        reviewController.setBookUserId,
        reviewController.createReview
    )
router
    .route('/:id')
    .get(
        authController.protect,
        authController.restrictTo('user'),
        reviewController.updateReview
    )
    .patch(
        authController.protect,
        authController.restrictTo('user'),
        reviewController.updateReview
    )
    .delete(
        authController.protect,
        authController.restrictTo('user'),
        reviewController.deleteReview
    )

module.exports = router
