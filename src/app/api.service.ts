import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../environments/environment'
import { ThrowStmt } from '@angular/compiler';
import {Todo} from './models/todo';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }


  getHeaders() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': environment.headers,
      })
    }
    return httpOptions;
  }

  getBusiness(){
    return this.http.get(environment.baseURL, this.getHeaders());
  }

  public getRecipePuppy() {
    return this.http.get(environment.recipeURL);
  }

  public getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${environment.todoUrl}${environment.todoLimit}`);
  }
}
