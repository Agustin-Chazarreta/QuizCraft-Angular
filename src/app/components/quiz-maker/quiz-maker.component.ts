import { Component, Input } from '@angular/core';
import { Quiz } from 'src/app/interfaces/quiz';
import { QUIZ } from 'src/app/mock/mocked-quiz';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-quiz-maker',
  templateUrl: './quiz-maker.component.html',
  styleUrls: ['./quiz-maker.component.css']
})

export class QuizMakerComponent {
  @Input()
  quiz: Quiz = QUIZ
  // addQuestion() {
  //   this.quiz.questions.push("asd")
  // }

  setCorrectAnswer(answer: string, questionId: string) {
    const question = this.quiz.questions.find(question => question.id === questionId);

    if (question) {
      question.correct_answer = answer
    }
  }
  createQuiz() {
    this.quiz.id = uuidv4()
    console.log('first', this.quiz)
  }
}


