import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quiz } from 'app/interfaces/quiz';
@Injectable({
  providedIn: 'root',
})
export class QuizApi {
  // TODO move to env
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getQuizList(): Observable<any> {
    return this.http.get(`${this.apiUrl}/quiz`);
  }

  getQuizById(qId: string): Observable<Quiz> {
    return this.http.get<Quiz>(`${this.apiUrl}/quiz/${qId}`)
  }

  createQuiz(quiz: Quiz): Observable<Quiz> {
    return this.http.post<Quiz>(`${this.apiUrl}/quiz`, quiz);
  }

}
