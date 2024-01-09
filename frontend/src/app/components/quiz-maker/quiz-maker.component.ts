import { Component, Input } from '@angular/core';
import { Quiz } from '../../interfaces/quiz';
import { QuizApi } from 'app/services/quiz-api.service';

@Component({
  selector: 'app-quiz-maker',
  templateUrl: './quiz-maker.component.html',
  styleUrls: ['./quiz-maker.component.css'],
})

export class QuizMakerComponent {
  constructor(private quizApi: QuizApi) { }
  nextQuestionId = 1
  quiz: Quiz = {
    author_id: 12,
    title: "",
    description: "",
    questions: [
      {
        id: 0,
        question: "",
        correct_answer: "",
        possible_answers: [{ value: "", id: "1" }, { value: "", id: "2" }, { value: "", id: "3" }, { value: "", id: "4" }]
      }
    ]
  }
  @Input()

  generateUniqueId(): number {
    return this.nextQuestionId++;
  }
  setCorrectAnswer(answerId: string, questionId: number) {
    const question = this.quiz.questions.find(question => question.id === questionId);

    if (question) {
      question.correct_answer = answerId
    }
  }
  addQuestion() {
    const newQuestion = {
      id: this.generateUniqueId(),
      question: '',
      correct_answer: '',
      possible_answers: [{ value: "", id: "1" }, { value: "", id: "2" }, { value: "", id: "3" }, { value: "", id: "4" }]
    };
    this.quiz.questions.push(newQuestion);
  }


  createQuiz() {

    this.quiz.questions.forEach(question => {
      question.id = this.generateUniqueId();
    });
    this.nextQuestionId = 1;
    this.quizApi.createQuiz(this.quiz).subscribe(res => {
      console.log("res", res)
    })
  }
}

