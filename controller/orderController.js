const Book = require('../models/bookModel')
const Order = require('../models/orderModel')
const dotenv = require('dotenv')

dotenv.config({ path: './config.env' })
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

exports.getCheckoutSession = async (req, res) => {
    const book = await Book.findById(req.params.bookId)
    const fixedPrice = Math.round(book.price)
    const unitAmount = Math.round(fixedPrice)
    const unit_amount = fixedPrice * 100
    // console.log(book, fixedPrice);
    console.log(unit_amount, fixedPrice)
    try {
        // 1) Get the current book
        // const book = await Book.findById(req.params.bookId)
        console.log(book)

        // 2) create checkout session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            success_url: `${req.protocol}://${req.get('host')}/?book=${
                req.params.bookId
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
                                `https://imgs.search.brave.com/HepSS0KfMxYiWOhfm1j9dO4HQwScLZBQjzmveSxn7Bs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk56QTVaRE5s/WldNdE0yTmhOUzAw/TkRKakxUazROREl0/WVRSbVkyRXdNV1ps/TVRZM1hrRXlYa0Zx/Y0dkZVFYVnlOemt3/TWpRNU56TUAuanBn`
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
        res.status(404).json({
            status: 'fail',
            message: error.message
        })
    }
}

exports.createOrderCheckout = async (req, res) => {
    try {
        // THIS IS ONLY TEMPORARY, because it's UNSECURE: everyone can make booking without paying
        const { book, user, price } = req.query

        if (!book && !user && !price) return next()
        await Order.create({ book, user, price })
        res.redirect(req.originalUrl.split('?')[0])
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error.message
        })
    }
}
