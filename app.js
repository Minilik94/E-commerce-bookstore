const express = require('express');
const morgan = require('morgan');
const bookRouter = require('./routes/bookRoutes');
const userRouter = require('./routes/userRoutes');
const reviewRouter = require('./routes/reviewRoutes');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');

const app = express();

// Set security HTTP
app.use(helmet());

// Configure CORS to allow requests from a specific origin
// const allowedOrigins = ['http://localhost:5173']; // Add your allowed origins here
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
// };
const corsOptions = {
  origin: '*'
};

app.use(cors(corsOptions)); // Use cors with custom options

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Rate limiter
const limiter = rateLimit({
  max: 10,
  windowMs: 15 * 60 * 100,
});

// app.use('/api', limiter);

// Body parser, reading data from req.body
app.use(express.json({ limit: '10kb' }));

// Data sanitization against Nosql query injection
app.use(mongoSanitize());
// Data sanitization against XSS
app.use(xss());

// Preventing parameter pollution
app.use(
  hpp({
    whitelist: ['category', 'publisher', 'ratingAverage', 'author', 'price'],
  })
);

app.get('/', (req, res) => {
  res.send('Welcome To Books API');
});

app.options('/api/books', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.sendStatus(204); // No content
  });
  

app.use('/api/books', bookRouter);
app.use('/api/users', userRouter);
app.use('/api/reviews', reviewRouter);

// Serving static files
app.use(express.static(`${__dirname}/client`));

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/client/app.html`);
  console.log(`${__dirname}`)
});

module.exports = app;
