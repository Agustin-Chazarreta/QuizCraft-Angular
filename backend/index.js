require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const QuizModel = require('./Quiz');

mongoose.connect(process.env.DATABASE_URL);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();

app.use(express.json());
app.use(cors())

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})

app.get("/quiz", async (req, res) => {
    try {
        const results = await QuizModel.find({}, { title: 1, id: 1, description: 1 }).exec();
        res.json({ data: results });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
})


app.get("/quiz/:id", async (req, res) => {
    try {
        const quizId = req.params.id;
        const quiz = await QuizModel.findById(quizId).exec();

        if (!quiz) {
            return res.status(404).json({ error: "Quiz not found" });
        }

        res.json(quiz);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
})

app.post("/quiz", async (req, res) => {
    try {
        const quiz = new QuizModel(req.body);
        console.log('req.body', req.body)

        if (!quiz) {
            return res.status(404).json({ error: "Couldnt create quiz" });
        }
        await quiz.save();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
})
