const express = require('express')
const orderController = require('../controller/orderController')
const authController = require('../controller/authController')

const router = express.Router()

router.get(
    '/checkout-session/:bookId',

    authController.protect,
    orderController.getCheckoutSession,
)

router.route('/')
    .get(authController.protect, orderController.createOrderCheckout)
    .get(authController.protect, orderController.getMyOrders)


module.exports = router
