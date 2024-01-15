import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  registerUser(form: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, form);
  }
  loginUser(form: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, form);
  }
}
