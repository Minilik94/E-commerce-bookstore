const express = require("express");
const morgan = require("morgan");
const bookRouter = require("./routes/bookRoutes");
const userRouter = require("./routes/userRoutes")

const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome To Books api");
});

app.use("/api/books", bookRouter);
app.use("/api/users", userRouter)

module.exports = app;
