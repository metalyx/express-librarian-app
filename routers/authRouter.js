const Router = require('express');
const router = new Router();
const controller = require('../controllers/authController');
const { check } = require('express-validator');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

router.post(
    '/registration',
    [
        check('username', 'Username cannot be empty').notEmpty(),
        check(
            'password',
            'Password cannot be less than 4 characters length'
        ).isLength({ min: 4 }),
    ],
    controller.registration
);
router.post(
    '/login',
    [check('username', 'Username cannot be empty').notEmpty()],
    controller.login
);
// router.get('/users', roleMiddleware(['ADMIN']), controller.getUsers);

module.exports = router;
