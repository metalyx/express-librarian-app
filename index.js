const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./routers/authRouter');
const booksRouter = require('./routers/booksRouter');
const adminRouter = require('./routers/adminRouter');
const { dbLogin, dbPassword } = require('./config');

const PORT = process.env.PORT || 5000;
const rootAPIPath = '/api';

const app = express();
app.use(express.json());

app.use(`${rootAPIPath}/auth`, authRouter);
app.use(`${rootAPIPath}/admin`, adminRouter);
app.use(`${rootAPIPath}/books`, booksRouter);

const start = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://${dbLogin}:${dbPassword}@cluster0.4odlt8i.mongodb.net/?retryWrites=true&w=majority`
        );
        app.listen(PORT, () => console.log(`server started, port ${PORT}`));
    } catch (e) {
        console.log(e);
    }
};

start();
