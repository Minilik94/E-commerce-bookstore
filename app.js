const express = require("express");
const morgan = require("morgan");
const bookRouter = require("./routes/bookRoutes");
const userRouter = require("./routes/userRoutes")
const rateLimit = require("express-rate-limit")
const helmet = require("helmet")
const mongoSanitize = require("express-mongo-sanitize")
const xss = require("xss-clean")
const hpp = require('hpp')

const app = express();

// Set security HTTP
app.use(helmet())

if(process.env.NODE_ENV === 'development'){
app.use(morgan("dev"));
}
// Rate limiter
const limiter = rateLimit({
  max: 10,
  windowMs: 15 * 60 * 100
})

app.use("/api", limiter)

// Body parser, reading data from req.body
app.use(express.json({ limit: '10kb' }));

// Data sanitization against Nosql query injection
app.use(mongoSanitize())
// Data sanitization againest XSS
app.use(xss())

// preventing parameter pollution
app.use(hpp({
  whitelist: ['category', 'publisher', 'ratingAverage', 'author', 'price']
}))

app.get("/", (req, res) => {
  res.send("Welcome To Books api");
});

app.use("/api/books", bookRouter);
app.use("/api/users", userRouter)

module.exports = app;
