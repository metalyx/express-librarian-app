const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

const Booking = new Schema({
    date: { type: String, required: true, default: Date.now() },
    booker: { type: mongoose.Types.ObjectId, ref: 'User' },
    book: { type: mongoose.Types.ObjectId, ref: 'Book' },
    isActive: { type: Boolean, required: true, default: true },
});

module.exports = model('Booking', Booking);
