const Router = require('express');
const bookingController = require('../controllers/bookingController');
const roleMiddleware = require('../middleware/roleMiddleware');
const router = new Router();

router.post(
    '/create',
    roleMiddleware(['ADMIN', 'LIBRARIAN']),
    bookingController.createBooking
);
router.get(
    '/',
    roleMiddleware(['ADMIN', 'LIBRARIAN']),
    bookingController.getAllBookings
);
router.post(
    '/cancell',
    roleMiddleware(['ADMIN', 'LIBRARIAN']),
    bookingController.cancellBooking
);

module.exports = router;
