const Router = require('express');
const staffController = require('../controllers/staffController');
const roleMiddleware = require('../middleware/roleMiddleware');
const router = new Router();

router.get(
    '/users',
    roleMiddleware(['LIBRARIAN', 'ADMIN']),
    staffController.getUsers
);

module.exports = router;
