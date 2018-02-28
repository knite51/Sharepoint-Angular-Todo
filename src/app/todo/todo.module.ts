import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoComponent } from './todo.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { CommonModule } from '@angular/common';
import { TodoRouteModule } from './todo.routes.module';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemsComponent } from './todo-list/todo-items/todo-items.component';

@NgModule({
  declarations: [
    TodoComponent,
    TodoEditComponent,
    TodoListComponent,
    TodoItemsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TodoRouteModule
  ]
})

export class TodoModule { }
