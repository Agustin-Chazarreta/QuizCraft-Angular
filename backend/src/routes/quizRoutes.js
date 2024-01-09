const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController');

router.get("/quiz", quizController.getQuizzes);
router.get("/quiz/:id", quizController.getQuizById);
router.post("/quiz", quizController.createQuiz);

module.exports = router;