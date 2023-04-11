const { query } = require("express");
const Book = require("../models/bookModel");

// GET ALL THE BOOKS

exports.getAllBooks = async (req, res) => {
  try {
    // BUILD THE QUERY
    console.log(req.query);
    const queryObj = { ...req.query };

    const excludedFields = ["page", "sort", "limit", "fields"];
    excludedFields.forEach((el) => delete queryObj[el]);

    // 1B) ADVANCED FILTERING
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

    console.log(JSON.parse(queryStr));
    let query = Book.find(JSON.parse(queryStr));

    // 2) SORTING
    if(req.query.sort){
      const sortBy = req.query.sort.split(',').join(' ');
      console.log(sortBy);
      query = query.sort(sortBy)
    }
    else{
      query = query.sort('createdAt')
    }

    // 3) FIELDS
    if(req.query.fields){
      const fields = req.query.fields.split(',').join(' ')
      query = query.select(fields)
    }else {
      query = query.select('-__v')
    }

    // 4) PAGINATION 
    const page = req.query.page * 1 || 1
    const limit = req.query.limit * 1 || 100
    const skip = (page - 1) * limit

    query = query.skip(skip).limit(limit)

    if (req.query.page) {
      const numPage = await Book.countDocuments();

      if (skip >= numPage) throw new Error('This page does not exist');
    }

    // EXECUTE THE QUERY
    const books = await query;
    res.status(200).json({
      status: "success",
      result: books.length,
      data: {
        books,
      },
    });
  } catch (error) {
    console.log(error.message);
    res.status(404).json({
      status: "fail",
      message: "Something Went Wrong",
    });
  }
};

exports.getBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      res.status(404).json({
        status: false,
        message: "Book does not exist",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        book,
      },
    });
  } catch (error) {
    console.log(error.message);
    res.status(404).json({
      status: "fail",
      message: "Something Went Wrong",
    });
  }
};

// CREATE  A BOOK

exports.createBook = async (req, res) => {
  try {
    const existingBook = await Book.findOne({ name: req.body.title });
    if (existingBook) {
      return res.status(400).json({
        status: "fail",
        message: "A book with this name already exists",
      });
    }

    const newBook = await Book.create(req.body);

    if (!newBook) {
      req.status(404).json({
        status: false,
        message: "Book does not exist",
      });
    }

    res.status(201).json({
      status: "success",
      data: {
        newBook,
      },
    });
  } catch (error) {
    console.log(error.message);
    res.status(404).json({
      status: "fail",
      message: "Something Went Wrong",
    });
  }
};

// UPDATE A BOOK

exports.updateBook = async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedBook) {
      res.status(404).json({
        status: "fail",
        message: "Book not found",
      });
    }

    res.status(200).json({
      status: "success",
      updatedBook,
    });
  } catch (error) {
    console.log(error.message);
    res.status(404).json({
      status: "fail",
      message: "Something Went Wrong",
    });
  }
};

// DELETE BOOK

exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error: "Something wrong with the server ",
    });
  }
};
