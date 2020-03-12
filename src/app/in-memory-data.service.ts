import { Injectable } from '@angular/core';
import { Todo } from "./todo";
import { InMemoryDbService } from 'angular-in-memory-web-api';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const todos = [
      { id:1, name:'Do tests', time: new Date(), done: false },
      { id:2, name:'Buy flowers', time: new Date(), done: false },
      { id:3, name:'Celebrate Birthday', time: new Date(), done: true }
    ]
    return {todos};
  }

  genId(todos: Todo[]): number {
    return todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
  }
}
