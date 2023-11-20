const fs = require('fs')
const dotenv = require('dotenv')
const Book = require('../models/bookModel')
const Review = require('../models/reviewModel')
const User = require('../models/userModel')
const mongoose = require('mongoose')
const { dirname } = require('path')

dotenv.config({ path: '../config.env' })

console.log(process.env.DATABASE);
console.log(process.env.DATABASE_PASSWORD);


const DB = process.env.DATABASE.replace(
    '<password>',
    process.env.DATABASE_PASSWORD
)


mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB Connected Successfuly!'))


// const books = JSON.parse(fs.readFileSync(`${__dirname}/books.json`, 'utf-8'))
const reviews = JSON.parse(fs.readFileSync(`${__dirname}/reviews.json`, 'utf-8'))
// const users = JSON.parse(fs.readFileSync(`${__dirname}/users.json`, 'utf-8'))

const importData = async () => {
    try {
    //  const book = await Book.create(books, {validateBeforeSave: false})
     const review = await Review.create(reviews, {validateBeforeSave: false})
    //  const user = await User.create(users, {validateBeforeSave: false})
     console.log('Document Imported Successfuly');
     process.exit()
    } catch (error) {
        console.error(error)
    }
}
const deleteData = async () => {
    try {
    //  const book = await Book.deleteMany()
     const review = await Review.deleteMany()
    //  const user = await User.deleteMany()
     console.log('Document Removed Successfuly');
     process.exit()
    } catch (error) {
        console.error(error)
    }
}

if(process.argv[2] === '--import'){
    importData()
}else if(process.argv[2] === '--delete'){
    deleteData()
}

// console.log(tours);
