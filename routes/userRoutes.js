const express = require('express')
const userControllers = require('../controller/userControllers')
const authContorller = require('../controller/authController')

const router = express.Router()

router.route('/signup').post(authContorller.signUp)
router.route('/login').post(authContorller.login)
router.route('/logout').post(authContorller.logout)

router.route('/forgotPassword').post(authContorller.forgotPassword)
router.route('/resetPassword/:token').patch(authContorller.resetPassword)
router
    .route('/updatePassword')
    .patch(authContorller.protect, authContorller.updatePassword)

router
    .route('/me')
    .get(authContorller.protect, userControllers.getMe, userControllers.getUser)
router
    .route('/updateMe')
    .patch(
        authContorller.protect,
        userControllers.uploadUserPhoto,
        userControllers.resizeImage,
        userControllers.updateMe
    )

router
    .route('/deleteMe')
    .patch(authContorller.protect, userControllers.deleteMe)

router
    .route('/')
    .get(userControllers.getAllUsers)
    .post(userControllers.createUser)
router
    .route('/:id')
    .get(userControllers.getUser)
    .patch(userControllers.updateUser)
    .delete(userControllers.deleteUser)

module.exports = router
