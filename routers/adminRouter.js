const Router = require('express');
const adminController = require('../controllers/adminController');
const roleMiddleware = require('../middleware/roleMiddleware');
const router = new Router();

router.get('/users', roleMiddleware(['ADMIN']), adminController.getUsers);

module.exports = router;
