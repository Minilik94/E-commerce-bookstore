const fs = require('fs')
const dotenv = require('dotenv')
const Book = require('../models/bookModel')
const mongoose = require('mongoose')
const { dirname } = require('path')

dotenv.config({ path: './config.env' })
const DB = process.env.DATABASE.replace(
    '<password>',
    process.env.DATABASE_PASSWORD
)


mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB Connected Successfuly!'))


const books = JSON.parse(fs.readFileSync(`${__dirname}/books.json`, 'utf-8'))

const importData = async () => {
    try {
     const book = await Book.create(books, {validateBeforeSave: false})
     console.log('Books Imported Successfuly');
    } catch (error) {
        console.error(error)
    }
}
const deleteData = async () => {
    try {
     const book = await Book.deleteMany()
     console.log('Books Removed Successfuly');
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
