const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./routers/authRouter');
const booksRouter = require('./routers/booksRouter');
const staffRouter = require('./routers/staffRouter');
const bookingRouter = require('./routers/bookingRouter');
const adminRouter = require('./routers/adminRouter');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();

const PORT = process.env.PORT || 5000;
const rootAPIPath = '/api';

const app = express();

app.use(cors());
app.use(express.json());

app.use(`${rootAPIPath}/auth`, authRouter);
app.use(`${rootAPIPath}/staff`, staffRouter);
app.use(`${rootAPIPath}/books`, booksRouter);
app.use(`${rootAPIPath}/bookings`, bookingRouter);
app.use(`${rootAPIPath}/admin`, adminRouter);

const start = async () => {
    try {
        console.log('connecting to db');
        await mongoose.connect(
            `mongodb+srv://${process.env.MONGO_LOGIN}:${process.env.MONGO_PASSWORD}@cluster0.4odlt8i.mongodb.net/?retryWrites=true&w=majority`
        );
        app.listen(PORT, () => console.log(`server started, port ${PORT}`));
    } catch (e) {
        console.log(e);
    }
};

start();
