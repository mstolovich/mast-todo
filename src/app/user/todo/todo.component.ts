import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { TodosService } from '../../todos.service';
import { Todo } from '../../todo';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todo: Todo
  todoTitle: string
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private todosService: TodosService
  ) { }
  
  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id')
    this.todosService.getTodo(id).subscribe(todo => this.todo = todo)  
  }
 
  saveChanges(formValues): void {
    this.todo.name = formValues.todoTitle
    this.todo.done = formValues.todoStatus
    this.todosService.updateTodo(this.todo).subscribe()
    this.router.navigate(['/user/todos'])
  }

  onChange(id: number): void {
    this.todo.done = !this.todo.done
  } 
}
