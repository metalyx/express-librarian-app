const { Schema, model } = require('mongoose');

const Book = new Schema({
    title: { type: String, required: true },
    authors: [{ type: String }],
});
