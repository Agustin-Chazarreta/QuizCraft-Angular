import { Component } from '@angular/core';
import { QUIZ } from 'src/app/mock/mocked-quiz';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {

quiz=QUIZ
selectedAnswer?: string;
isCorrectAnswer?:string;

 getSelection(selectedAnswer:string){
  this.selectedAnswer = selectedAnswer;

}

isCorrect(selectedAnswer:string,correctAnswer:string){
  if(selectedAnswer===correctAnswer){
 return  this.isCorrectAnswer="Correcto"

  }else return  this.isCorrectAnswer="Incorrecto"
}
}
