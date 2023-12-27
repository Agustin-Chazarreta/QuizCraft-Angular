import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Quiz } from '../../interfaces/quiz';
import { QuizApi } from 'app/services/quiz-api.service';

@Component({
  selector: 'app-answer-route',
  templateUrl: './answer-route.component.html',
  styleUrls: ['./answer-route.component.css']
})
export class AnswerRouteComponent implements OnInit {
  quiz?: Quiz
  quiz_id?: string
  constructor(private route: ActivatedRoute, private quizApi: QuizApi) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.quiz_id = params["id"]

      if (this.quiz_id)
        this.quizApi.getQuizById(this.quiz_id).subscribe(quiz => {
          this.quiz = quiz
        })
    })
  }
}
