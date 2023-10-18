import { Component } from '@angular/core';
import { Quiz } from 'src/app/interfaces/quiz';
import { QUIZ } from 'src/app/mock/mocked-quiz';
import { Answer } from 'src/app/interfaces/questions';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {

  quiz: Quiz = QUIZ
  count = 0
  selectAnswer(questionId: string, answer: Answer) {
    const question = this.quiz.questions.find(question => question.id === questionId);

    if (question) {
      question.possible_answers.forEach(possibleAnswer => {
        possibleAnswer.selected = possibleAnswer.value === answer.value;
      });
    }
    if (answer.value === question?.correct_answer) {
      this.count += 1
    }
    console.log(`Respondiste ${this.count}/${this.quiz.questions.length}`)
  }
  onSubmit() {
    console.log('quiz', this.quiz)
    this.count = 0
  }

}
