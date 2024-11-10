const Book = require('../models/bookModel')
const Order = require('../models/orderModel')
const dotenv = require('dotenv')
const factory = require('./handlerFactory')

dotenv.config({ path: './config.env' })
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

exports.getCheckoutSession = async (req, res, next) => {
    const book = await Book.findById(req.params.bookId)

    console.log(book, 'book');
    const fixedPrice = Math.round(book.price)
    const unitAmount = Math.round(fixedPrice)
    const unit_amount = fixedPrice * 100
    // console.log(book, fixedPrice);
    try {
        // 1) Get the current book
        // const book = await Book.findById(req.params.bookId)

        // 2) create checkout session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            success_url: `${req.protocol}://${req.get('host')}?book=${req.params.bookId
                }&user=${req.user.id}&price=${book.price}`,
            cancel_url: `${req.protocol}://${req.get('host')}/`,
            customer_email: req.user.email,
            client_reference_id: req.params.bookId,
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: `${book.title}`,
                            images: [
                                `https://rebook-by-minilik.onrender.com/books/${book.coverImage}`
                            ]
                        },
                        unit_amount: fixedPrice * 100
                    },

                    quantity: 1
                }
            ]
        })

        res.status(200).json({
            status: 'success',
            session
        })
    } catch (error) {
        // console.log(error);
        return res.status(404).json({
            status: 'fail',
            message: error.message
        })
    }
}

exports.createOrderCheckout = async (req, res, next) => {
    try {
        console.log('Inside createOrderCheckout');
        console.log('request query', req.query);

        // THIS IS ONLY TEMPORARY, because it's UNSECURE: everyone can make booking without paying
        const book = req.query.book;
        const user = req.query.user;
        const price = req.query.price;

        console.log('creating order', book, user, price);

        if (!book || !user || !price) {
            console.log('Missing parameters');
            return next()
        }



        const rest = await Order.create({ book, user, price });
        console.log(rest, 'order created successfully ')
        res.redirect(req.originalUrl.split('?')[0]);
    } catch (error) {
        console.log('Error in createOrderCheckout', error);
        res.status(500).json({
            status: 'fail',
            message: error.message
        });
    }
};



exports.createOrder = factory.createOne(Order)
exports.getOrder = factory.getOne(Order)
exports.getAllOrders = factory.getAll(Order)
exports.updateOrder = factory.updateOne(Order)
// exports.deleteOrder = factory.deleteOne(Order)