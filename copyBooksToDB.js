const fs = require('fs')
const Book = require('./models/bookModel')

const bookData = JSON.parse(
    fs.readFileSync('./booksFromGoogleApi.json', 'utf-8')
)

Book.insertMany(bookData)
    .then(() => {
        console.log(bookData)
        process.exit(0)
    })
    .catch((error) => {
        console.error('Error copying books to MongoDB:', error)
        process.exit(1)
    })

console.log('Copying books to MongoDB...')
