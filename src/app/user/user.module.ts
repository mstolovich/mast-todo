import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user/user.component';
import { TodoComponent } from './todo/todo.component';
import { TodosComponent } from './todos/todos.component';


@NgModule({
  declarations: [
    UserComponent, 
    TodoComponent, 
    TodosComponent, 
    ],
  
    imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ]
})
export class UserModule { }
