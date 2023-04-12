const express = require("express");
const Book = require("../models/bookModel");
const bookControllers = require("../controller/bookContorllers");

const router = express.Router();

router.route('/bookStats').get(bookControllers.getBookStats)
router.route('/top-5-cheap').get(bookControllers.aliasTopBooks,bookControllers.getAllBooks)

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
