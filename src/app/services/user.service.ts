import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { User } from '../interfaces/user';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API_ENDPOINT = 'http://localhost:8000/api/auth';
  constructor(private http: HttpClient) { }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.API_ENDPOINT + '/users')
      .pipe(
        tap( users => this.log(`fetched users`)),
        catchError(this.handleError('getUsers', []))
      );
  }
  getUser(): Observable<User> {
    return this.http.get<User>(this.API_ENDPOINT + '/user' )
      .pipe(
        tap(_ => this.log(`fetched authenticated user`) ),
        catchError(this.handleError<User>(`getUser authenticated`))
      );
  }
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.API_ENDPOINT + 'signup', user, httpOptions)
    .pipe(
      tap((newUser: User) => this.log(`added  User w/ id=${newUser.id}`)),
      catchError(this.handleError<User>('addUser'))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
  private log(message: string) {
    console.log('UserService: ' + message);
  }
}
