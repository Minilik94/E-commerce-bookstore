const express = require('express')
const morgan = require('morgan')
const bookRouter = require('./routes/bookRoutes')
const userRouter = require('./routes/userRoutes')
const reviewRouter = require('./routes/reviewRoutes')
const orderRouter = require('./routes/orderRoutes')
const rateLimit = require('express-rate-limit')
const helmet = require('helmet')
const mongoSanitize = require('express-mongo-sanitize')
const xss = require('xss-clean')
const hpp = require('hpp')
const cors = require('cors')

const app = express()

// Set security HTTP
app.use(helmet())

const corsOptions = {
    origin: '*',
    methods: 'GET,POST,PATCH,DELETE' 
  }
  

app.use(cors(corsOptions)) // Use cors with custom options

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// Rate limiter
const limiter = rateLimit({
    max: 10,
    windowMs: 15 * 60 * 100
})

// app.use('/api', limiter);

// Body parser, reading data from req.body
app.use(express.json({ limit: '10kb' }))

// Data sanitization against Nosql query injection
app.use(mongoSanitize())
// Data sanitization against XSS
app.use(xss())

// Preventing parameter pollution
app.use(
    hpp({
        whitelist: ['category', 'publisher', 'ratingAverage', 'author', 'price']
    })
)

// app.get('/', (req, res) => {
//     res.send('Welcome To Books API')
// })

// app.options('/api/books', (req, res) => {
//     res.header('Access-Control-Allow-Origin', 'http://127.0.0.1')
//     res.header('Access-Control-Allow-Methods','POST, PATCH, DELETE')
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
//     res.sendStatus(204) // No content
// })
// app.options('/api/users', (req, res) => {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:4173', 'http://localhost:5173', 'http://localhost:3000', 'http://127.0.0.1:3000')
//     res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE')
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
//     res.sendStatus(204) // No content
// })

app.use('/api/books', bookRouter)
app.use('/api/users', userRouter)
app.use('/api/reviews', reviewRouter)
app.use('/api/ordering', orderRouter)

// Serving static files
app.use(express.static(`${__dirname}/client/build`));

import("././client/build/handler.js").then(({ handler }) => {
  app.use(handler);
});

module.exports = app
