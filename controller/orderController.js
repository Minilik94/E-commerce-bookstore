const Book = require('../models/bookModel')
const Order = require('../models/orderModel')
const dotenv = require('dotenv')
const factory = require('./handlerFactory')
const { Orders } = require('stripe/lib/resources')
const User = require('../models/userModel')

dotenv.config({ path: './config.env' })
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

exports.getCheckoutSession = async (req, res, next) => {
    const book = await Book.findById(req.params.bookId)

    console.log(book, 'book')
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
            // success_url: `${req.protocol}://${req.get('host')}/?book=${req.params.bookId
            //     }&user=${req.user.id}&price=${book.price}`,
            success_url: `${req.protocol}://${req.get('host')}/mybooks`,
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
                                `https://rebook-bucket.s3.eu-north-1.amazonaws.com/books/${book.coverImage}`
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

// exports.createOrderCheckout = async (req, res, next) => {
//     try {
//         console.log('Inside createOrderCheckout');
//         console.log('request query', req.query);

//         // Check for necessary parameters
//         const book = req.query.book;
//         const user = req.query.user;
//         const price = req.query.price;
//         console.log('Creating order', book, user, price);

//         if (!book || !user || !price) {
//             console.log('Missing parameters');
//             return next(); // If parameters are missing, skip order creation
//         }

//         // Create the order
//         const order = await Order.create({ book, user, price });
//         console.log(order, 'order created successfully');

//         // Send a JSON response instead of redirecting
//         res.redirect(req.originalUrl.split('?')[0]);

//     } catch (error) {
//         console.log('Error in createOrderCheckout', error);
//         res.status(500).json({
//             status: 'fail',
//             message: error.message
//         });
//         next()
//     }
// };

const createBookingCheckout = async (session) => {
    try {
        const book = session.client_reference_id
        const user = (await User.findOne({ email: session.customer_email }))._id
        const sessionWithItems = await stripe.checkout.sessions.retrieve(
            session.id,
            {
                expand: ['line_items']
            }
        )
        const price =
            sessionWithItems.line_items.data[0].price_data.unit_amount / 100

        await Order.create({ book, user, price })
        console.log(`Order created: Book ${book}, User ${user}, Price ${price}`)
    } catch (error) {
        console.error('Error in createCheckoutSession:', error.message)
    }
}

console.log(process.env.STRIPE_WEBHOOK_SECRET, 'secret key ')

exports.webhookCheckout = async (req, res, next) => {
    const signature = req.headers['stripe-signature']

    console.log(signature, 'signature')

    let event
    try {
        console.log(process.env.STRIPE_WEBHOOK_SECRET, 'stripe webhook secret')
        event = stripe.webhooks.constructEvent(
            req.body,
            req.headers['stripe-signature'], // Your Stripe webhook signature
            process.env.STRIPE_WEBHOOK_SECRET
        )
    } catch (err) {
        console.log(`⚠️  Webhook signature verification failed.`, err.message)
        return res.status(400).send(`Webhook Error: ${err.message}`)
    }

    if (event.type === 'checkout.session.completed') {
        createBookingCheckout(event.data.object)
    }

    res.status(200).json({ received: true })
}

exports.getMyOrders = async (req, res, next) => {
    try {
        // 1) Find all orders for the logged-in user
        const orders = await Order.find({ user: req.user.id })

        if (!orders || orders.length === 0) {
            return res
                .status(404)
                .json({ message: 'No orders found for this user' })
        }

        // 2) Map over orders to get books
        const bookIds = orders.map((order) => order.book)
        const books = await Book.find({ _id: { $in: bookIds } })

        res.status(200).json({
            status: 'success',
            books
        })
    } catch (error) {
        console.log('Error in getMyOrders:', error)
        res.status(500).json({
            status: 'fail',
            message: 'An error occurred while retrieving orders'
        })
        next()
    }
}

exports.createOrder = factory.createOne(Order)
exports.getOrder = factory.getOne(Order)
exports.getAllOrders = factory.getAll(Order)
exports.updateOrder = factory.updateOne(Order)
exports.deleteOrder = factory.deleteOne(Order)
