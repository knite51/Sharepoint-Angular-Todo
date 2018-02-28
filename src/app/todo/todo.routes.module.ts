import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo.component';
import { AppRoutesModule } from '../app.routes.module';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { TodoItemsComponent } from './todo-list/todo-items/todo-items.component';

const todoRoutes: Routes = [
  { 
    path: 'todo-list', component: TodoComponent, children: [
    { path: ':id', component: TodoItemsComponent },
    ]
  },
];

@NgModule({
  imports: [
    AppRoutesModule,
    RouterModule.forChild(todoRoutes)
  ],
  exports: [ RouterModule ]
})

export class TodoRouteModule { }
