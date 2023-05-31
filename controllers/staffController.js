const User = require('../models/User');

class staffController {
    async getUsers(req, res) {
        try {
            const users = await User.find().select('username roles booked');
            res.status(200).json(users);
        } catch (e) {
            console.log(e);
            res.status(400).json({ message: 'getUsers error' });
        }
    }
}

module.exports = new staffController();
