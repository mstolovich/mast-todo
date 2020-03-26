import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';

import { AuthGuard } from '../auth/auth.guard';
import { TodoComponent } from './todo/todo.component';
import { TodosComponent } from './todos/todos.component';


const userRoutes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          { path: 'todos/:id', component: TodoComponent },
          { path: 'todos', component: TodosComponent }, 

        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
