const Router = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const booksController = require('../controllers/booksController');
const roleMiddleware = require('../middleware/roleMiddleware');
const router = new Router();

router.get('/', authMiddleware, booksController.getAllBooks);
router.post(
    '/',
    roleMiddleware(['ADMIN', 'LIBRARIAN']),
    booksController.createBook
);

module.exports = router;
