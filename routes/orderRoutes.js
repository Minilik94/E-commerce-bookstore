const express = require('express');
const orderController = require('../controller/orderController');
const authController = require('../controller/authController');

const router = express.Router();

// Route for creating a checkout session for a specific book
router.get(
    '/checkout-session/:bookId',
    authController.protect,
    orderController.getCheckoutSession
);

// Route for retrieving the logged-in user's orders
router.get('/my-orders', authController.protect, orderController.getMyOrders);

// Route for creating an order after checkout
router.get('/create-order', authController.protect, orderController.createOrderCheckout);

// Routes for getting all orders and creating a new order
router
    .route('/')
    .get(authController.protect, orderController.getAllOrders) // Get all orders (possibly restricted based on role)
    .post(authController.protect, orderController.createOrder); // Create a new order

// Routes for getting, updating, and deleting a specific order by ID
router
    .route('/:id')
    .get(authController.protect, orderController.getOrder) // Get a specific order by ID
    .patch(
        authController.protect,
        authController.restrictTo('admin'), // Only admins can update orders
        orderController.updateOrder
    )
    .delete(
        authController.protect,
        authController.restrictTo('admin'), // Only admins can delete orders
        orderController.deleteOrder
    );

module.exports = router;
