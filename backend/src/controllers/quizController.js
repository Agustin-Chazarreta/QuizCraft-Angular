const QuizModel = require('../models/Quiz');

exports.getQuizzes = async (req, res) => {
    try {
        const results = await QuizModel.find({}, { title: 1, id: 1, description: 1 }).exec();
        res.json({ data: results });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.getQuizById = async (req, res) => {
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
};

exports.createQuiz = async (req, res) => {
    try {
        const quiz = new QuizModel(req.body);

        if (!quiz) {
            return res.status(404).json({ error: "Couldn't create quiz" });
        }

        await quiz.save();
        res.status(201).json({ message: 'Quiz created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};