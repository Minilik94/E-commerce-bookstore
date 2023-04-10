const express = require("express");
const Book = require("../models/bookModel");
const bookControllers = require("../controller/bookContorllers");

const router = express.Router();

router
  .route("/")
  .get(bookControllers.getAllBooks)
  .post(bookControllers.createBook);

router
  .route("/:id")
  .get(bookControllers.getBook)
  .patch(bookControllers.updateBook)
  .delete(bookControllers.deleteBook);

module.exports = router;
