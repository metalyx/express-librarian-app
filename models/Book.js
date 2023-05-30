const { Schema, model } = require('mongoose');

const Book = new Schema({
    title: { type: String, required: true }, // Title of the book
    year: { type: String, required: true }, // Year of publication
    authors: [{ type: String, ref: 'Author' }], // Names of Authors
    description: { type: String }, // Book description
    cover: { type: String }, // URL of image
    isAvailable: { type: Boolean, required: true },
});

module.exports = model('Book', Book);
