const mongoose = require('mongoose')


const orderSchema = new mongoose.Schema({
    book: {
        type: mongoose.Schema.ObjectId,
        ref: 'Book',
        required: [true, 'Orders must belong to a book']
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'user',
        required: [true,'Orders must belong to a user']
    },
    price: {
        type: Number,
        requried: [true, 'Orders must have a price']
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    paid: {
        type: Boolean,
        default: true
    }

})

const Order = mongoose.model('Order', orderSchema)

module.exports = Order