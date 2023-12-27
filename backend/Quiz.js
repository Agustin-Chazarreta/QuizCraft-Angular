const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quizSchema = new Schema({
    id: { type: mongoose.Types.ObjectId },
    author_id: { type: Number, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    questions: [{
        id: { type: String, required: true },
        question: { type: String, required: true },
        correct_answer: { type: String, required: true },
        possible_answers: [{
            id: { type: String, required: true },
            value: { type: String, required: true }
        }]
    }]
}, {
    collection: 'quiz'
});

const QuizModel = mongoose.model('quiz', quizSchema);

module.exports = QuizModel;
