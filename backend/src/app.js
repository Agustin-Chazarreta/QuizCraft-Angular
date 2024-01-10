const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenvConfig = require('./config/dotenv');
const quizRoutes = require('./routes/quizRoutes');
const userRoutes = require('./routes/userRoutes');
const { checkToken } = require('./middlewares/checkToken');

mongoose.connect(process.env.DATABASE_URL);

const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error);
});

database.once('connected', () => {
    console.log('Database Connected');
});

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', checkToken, quizRoutes);
app.use('/users', checkToken, userRoutes);

module.exports = app;