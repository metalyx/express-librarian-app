const Book = require('../models/Book');
const Booking = require('../models/Booking');
const User = require('../models/User');
const { unexpectedError, showError } = require('../helpers/Errors');

class bookingController {
    async createBooking(req, res) {
        try {
            let { date, booker, book, isActive } = req.body;

            if (!book || !booker) {
                return res
                    .status(400)
                    .json({ message: 'Fields booker and book are required.' });
            }

            if (!date) {
                date = Date.now();
            }

            if (!isActive) {
                isActive = true;
            }

            const bookerDB = await User.findById(booker);
            if (!bookerDB) {
                return res.status(400).json({
                    message: `User with _id ${booker} was not found.`,
                });
            }

            const bookDB = await Book.findById(book);
            if (!bookDB) {
                return res
                    .status(400)
                    .json({ message: `Book with _id ${book} was not found.` });
            }

            const booking = await Booking.create({
                date,
                booker,
                book,
                isActive,
            });

            const updatedBook = await bookDB.updateOne({ isAvailable: false });
            const updatedUser = await bookerDB.updateOne({
                $push: { bookings: booking._id },
            });

            res.status(201).json(booking);
        } catch (e) {
            res.status(500).json({
                message: 'Error with creating new booking.',
                ...e,
            });
        }
    }

    async cancellBooking(req, res) {
        const { _id } = req.body;

        if (!_id) {
            return showError(res, 'No _id of booking was provided');
        }

        const updatedBooking = await Booking.findByIdAndUpdate(_id, {
            isActive: false,
        });

        const booker = await User.findByIdAndUpdate(updatedBooking.booker, {
            // $pull: { bookings: updatedBooking._id },
            $pull: { bookings: _id },
        });

        const book = await Book.findByIdAndUpdate(updatedBooking.book, {
            isAvailable: true,
        });

        res.status(200).json({ updatedBooking, booker });
    }

    async getAllBookings(req, res) {
        try {
            const bookings = await Booking.find();

            res.status(200).json(bookings);
        } catch (e) {
            unexpectedError(res, e);
        }
    }
}

module.exports = new bookingController();
