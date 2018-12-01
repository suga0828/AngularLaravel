import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API_ENDPOINT = 'http://localhost:8000/api/auth'; // Passport authentication URL
  private accessToken; // variable to store the access token
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    })
  }; // Options for API request
  isLogged = false;
  constructor(private http: HttpClient) { }
  logIn(request) {
    console.log('getToken');
    return this.http.post(this.API_ENDPOINT + '/login', request, this.httpOptions);
  }
  setToken(token) {
    console.log('setToken');
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', token.token_type + ' ' + token.access_token);
    this.accessToken = token;  // save the access_token
    // console.log(this.httpOptions.headers, this.accessToken);
    alert('successful login');
    this.isLogged = true;
    console.log(`SetToken + ${this.isLogged}`);
  }
  signUp(request) {
    return this.http.post(this.API_ENDPOINT + '/signup', request, this.httpOptions);
  }
  logOut() {
    this.isLogged = false;
    console.log(`LogOut + ${this.isLogged}`);
    return this.http.get(this.API_ENDPOINT + '/logout', this.httpOptions);
  }

  // API Rest for user: only show records
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.API_ENDPOINT + '/users', this.httpOptions);
  }
  getUser(): Observable<User> {
    return this.http.get<User>(this.API_ENDPOINT + '/user', this.httpOptions);
  }
}
