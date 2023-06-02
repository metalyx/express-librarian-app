const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

const User = new Schema({
    username: { type: String, unique: true, required: true }, // username and login
    password: { type: String, required: true }, // password
    roles: [{ type: String, ref: 'Role' }], // Roles from roles model
    bookings: [{ type: mongoose.Types.ObjectId, ref: 'Booking' }], // Book ids that were booked by this user
});

module.exports = model('User', User);
