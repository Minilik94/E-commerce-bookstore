const mongoose = require('mongoose')


const orderSchema = new mongoose.Schema({
    book: {
        type: mongoose.Schema.ObjectId,
        ref: 'Book',
        required: [true, 'Orders must belong to a book']
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [true,'Orders must belong to a user']
    },
    price: {
        type: Number,
        required: [true, 'Orders must have a price']
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

orderSchema.pre(/^find/, function(next) {
    this.populate('user').populate({
        path: 'book',
        select: 'title'
    })
    next()
})

const Order = mongoose.model('Order', orderSchema)

module.exports = Order