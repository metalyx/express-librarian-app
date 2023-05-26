const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./authRouter.js');
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use('/auth', authRouter);

const start = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://library:w3C2FL93kNLKAY6H@cluster0.4odlt8i.mongodb.net/?retryWrites=true&w=majority`
        );
        app.listen(PORT, () => console.log(`server started, port ${PORT}`));
    } catch (e) {
        console.log(e);
    }
};

start();
