import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddUser, getUser, LoginResponse, RegisterResponse, User } from '../Models/Auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly Base_URL = 'http://localhost:5500/auth/';

  constructor(private http: HttpClient) { }

  registerUser(newUser: AddUser): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(this.Base_URL + 'register', newUser);
  }

  loginUser(user: getUser): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.Base_URL + 'login', user);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.Base_URL + 'users');
  }

  approveUser(userId: string): Observable<User> {
    return this.http.patch<User>(this.Base_URL + `approve/${userId}`, {});
  }
}
