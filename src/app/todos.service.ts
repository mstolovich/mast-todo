import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Todo } from "./todo";
import { Observable, of } from 'rxjs';
import { catchError} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class TodosService{

    constructor(private http: HttpClient) { }

    private todosUrl = 'api/todos'

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    getTodos(): Observable<Todo[]> {
        return this.http.get<Todo[]>(this.todosUrl).pipe(
            catchError(this.handleError<Todo[]>([]))
        )
    }
    
    getTodo(id: number): Observable<Todo> {
        const url = `${this.todosUrl}/${id}`;
        return this.http.get<Todo>(url, this.httpOptions).pipe(
            catchError(this.handleError<Todo>())
        )
    }

    addTodo (todo: Todo): Observable<Todo> {
        return this.http.post<Todo>(this.todosUrl, todo, this.httpOptions).pipe(
            catchError(this.handleError<Todo>())
      )
    }

    updateTodo (todo: Todo): Observable<Todo> {
        return this.http.put<Todo>(this.todosUrl, todo, this.httpOptions).pipe(
            catchError(this.handleError<Todo>())
        )
    }

    private handleError<T> (result?: T) {
        return (error: any): Observable<T> => {
          console.error(error); 
          return of(result as T);
        };
      }

    deleteTodo (id: number): Observable<Todo> {
        const url = `${this.todosUrl}/${id}`;
        return this.http.delete<Todo>(url, this.httpOptions).pipe(
          catchError(this.handleError<Todo>()) 
        );
    };
}