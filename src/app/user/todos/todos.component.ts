import { Component, OnInit} from '@angular/core';
import { Todo } from '../../todo'
import { TodosService } from "../../todos.service";
import { delay } from 'rxjs/operators';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  public loading: boolean = true;
  public todos: Todo[];
  public title: string = '';

  constructor(public todosService: TodosService) { }

  ngOnInit(): void {
    this.todosService.getTodos()
    .pipe(delay(500))
    .subscribe((todos) => {
      this.loading = false;
      this.todos = todos;
    })
  }

  onToggle(id: number) {
    const index = this.todos.findIndex( todo => todo.id === id);
    this.todos[index].done = !this.todos[index].done;
  }
  
  onChange(id: number): void {
    this.onToggle(id)
  } 

  addTodo() {
    const todo: Todo = ({
      name: this.title,
      time: new Date(), 
      done: false
    } )

    this.title = '';
    this.todosService.addTodo(todo)
    .subscribe(todo => this.todos.push(todo));
  }

  removeTodo(id: number) {
    this.todosService.deleteTodo(id).subscribe( 
      () => {
        this.todos = this.todos.filter( t => t.id !== id );
      }
    )
  }
}
