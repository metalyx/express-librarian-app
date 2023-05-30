const Book = require('../models/Book');

class booksController {
    async getAllBooks(req, res) {
        try {
            const books = await Book.find();
            res.status(200).json(books);
        } catch (e) {
            console.log(e);
            res.status(400).json({ message: 'Error during fetch books', ...e });
        }
    }

    async createBook(req, res) {
        try {
            const book = req.body;
            const created = await Book.create(book);

            if (!created) {
                return res.status(400).json({
                    message: 'Error during creating a new book',
                    ...e,
                });
            }

            res.status(200).json({ message: 'Book created successfully.' });
        } catch (e) {
            res.status(400).json({
                message: 'Error during creating a new book',
                ...e,
            });
        }
    }

    async updateAll(req, res) {
        try {
            const updated = await Book.find().updateMany(
                {},
                { isAvailable: true }
            );

            if (!updated) {
                res.status(500).json(updated);
            }
            res.status(200).json({ message: 'success' });
        } catch (e) {
            console.log(e);
            res.status(500).json(e);
        }
    }
}

module.exports = new booksController();
