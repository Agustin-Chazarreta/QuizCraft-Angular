const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenvConfig = require('./config/dotenv');
const quizRoutes = require('./routes/quizRoutes');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
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

app.use('/', quizRoutes);

module.exports = app;