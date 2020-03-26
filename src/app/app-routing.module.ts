import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { TodoComponent } from './user/todo/todo.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { AuthGuard } from './auth/auth.guard';
import { TodosComponent } from './user/todos/todos.component';

const routes: Routes = [
  { path:'compose', component: ComposeMessageComponent, outlet: 'popup' }, 
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, 
    {
      enableTracing: false  
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
