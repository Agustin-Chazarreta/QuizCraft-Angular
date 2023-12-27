import { Component, Input } from '@angular/core';
import { Quiz } from '../../interfaces/quiz';

@Component({
  selector: 'app-quiz-answer',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizAnswerComponent {

  @Input() quiz?: Quiz
  selectedOptions: string[] = []
  currentIndex = 0
  canGoNext() {
    return this.quiz?.questions && this.quiz?.questions.length - 1 > this.currentIndex
  }
  nextStep() {
    if (!this.canGoNext()) return;
    this.currentIndex = this.currentIndex + 1
  }
  finishQuiz() {
    const correctAnswers = this.quiz?.questions.map(q => q.correct_answer)
    const validAnswered = correctAnswers?.map((correct, index) => {
      const userAnswer = this.selectedOptions[index]
      return userAnswer == correct
    }).filter(v => v)

    console.log(`respondiste ${validAnswered?.length}/${correctAnswers?.length}`)

  }
}
