const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'A Book Should have a title'],
        unique: true,
        trim: true,
    },
    
    author: {
        type: String,
        required: [true, 'A Book Should have an Author']
    },

    price: {
        type: Number,
        required: [true, 'A Book Should Have a Price']
    },

    category: {
        type: String,
        enum: ['Fiction', 'Romance', 'Science Fiction', 'Mystery', 'Self-Development','Programming' ,'Thriller', 'Economic','Horror', 'Non-Fiction', 'Biography', 'Autobiography', 'Crime', 'Children', 'Historical Fiction'],
        required: [true, 'A Book Should Have a Category ']
    },

    description: {
        type: String,
        required: [true, 'A Book Should Have a description']
    },

    publishedDate: {
        type: Date,
        required: [true, 'A Book Should Have a published Date']
    },

    publisher: {
        type: String,
        required: [true, 'A Book Should Have a Publisher']
    },

    language: {
        type: String,
        default: 'English'
    },

    coverImage: {
        type: String
    },

    ratingAverage: {
        type: Number,
        default: 4.5
    },

    ratingQuantity: {
        type: Number,
        default: 0
    },

    createdAt: {
        type: Date,
        default: new Date().toISOString().slice(0, 10)
    }
})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book