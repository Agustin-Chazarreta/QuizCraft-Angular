import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Quiz } from 'app/interfaces/quiz';
import { QuizApi } from 'app/services/quiz-api.service';

@Component({
  selector: 'app-quiz-list-route',
  templateUrl: './quiz-list-route.component.html',
  styleUrls: ['./quiz-list-route.component.css']
})
export class QuizListComponent implements OnInit {
  constructor(private router: Router, private quizApi: QuizApi) { }

  availableQuiz: Quiz[] = []

  ngOnInit(): void {
    this.quizApi.getQuizList().subscribe(res => {
      console.log(res)
      this.availableQuiz = res.data
    })
  }


  redirectToQuiz(id: string) {
    this.router.navigate(["/responder", id])
  }
}
