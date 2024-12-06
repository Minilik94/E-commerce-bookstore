const express = require('express')
const morgan = require('morgan')
const bookRouter = require('./routes/bookRoutes')
const userRouter = require('./routes/userRoutes')
const reviewRouter = require('./routes/reviewRoutes')
const orderRouter = require('./routes/orderRoutes')
const rateLimit = require('express-rate-limit')
const orderController = require('./controller/orderController.js')
const helmet = require('helmet')
const mongoSanitize = require('express-mongo-sanitize')
const xss = require('xss-clean')
const hpp = require('hpp')
const cors = require('cors')

const app = express()

// Set security HTTP headers with Helmet and configure CSP
// app.use(
//     helmet({
//         contentSecurityPolicy: {
//             directives: {
//                 defaultSrc: ["'self'"],
//                 scriptSrc: ["'self'", "'unsafe-inline'"],
//                 styleSrc: [
//                     "'self'",
//                     "'unsafe-inline'", // To allow dynamic styles
//                     "https://fonts.googleapis.com",
//                     "https://cdnjs.cloudflare.com"
//                 ],
//                 styleSrcElem: [
//                     "'self'",
//                     "'unsafe-inline'", // Allows inline styles in <style> tags
//                     "https://fonts.googleapis.com",
//                     "https://cdnjs.cloudflare.com"
//                 ],
//                 fontSrc: ["'self'", "https://fonts.gstatic.com", "https://cdnjs.cloudflare.com"],
//                 connectSrc: ["'self'", "https://*.stripe.com"],
//                 formAction: ["'self'", "https://*.stripe.com"],
//                 frameAncestors: ["'self'"]
//             }
//         }
//     })
// );

// Configure CORS
const corsOptions = {
    origin: '*',
    methods: 'GET,POST,PATCH,DELETE'
}
app.use(cors(corsOptions))

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// Rate limiter
const limiter = rateLimit({
    max: 1000,
    windowMs: 15 * 60 * 1000
})
app.use('/api', limiter)

app.post(
    '/webhook-checkout',
    express.raw({
        type: 'application/json'
    }),
    orderController.webhookCheckout
)

// Body parser
app.use(express.json({ limit: '10kb' }))

// Data sanitization
app.use(mongoSanitize())
app.use(xss())

// Preventing parameter pollution
app.use(
    hpp({
        whitelist: ['category', 'publisher', 'ratingAverage', 'author', 'price']
    })
)

// Routes
app.use('/api/books', bookRouter)
app.use('/api/users', userRouter)
app.use('/api/reviews', reviewRouter)
app.use('/api/ordering', orderRouter)

// Serving static files
app.use(express.static(`${__dirname}/client/build`))

// Import and use the handler for the client build
import('././client/build/handler.js').then(({ handler }) => {
    app.use(handler)
})

module.exports = app
