import { Component, OnInit, Input, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TodoModel } from '../../../shared/todo-model';
import { TodoService } from '../../todo.services';
import { DISABLED } from '@angular/forms/src/model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {
  TodoGroup: FormGroup;
  Test: boolean = true;
  @Input() todo: TodoModel;
  @Input() id: number;
 

  constructor(private todoService: TodoService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.TodoGroup = new FormGroup({
      'todoInfo': new FormControl({ value: this.todo.todoInfo, disabled: this.Test }),
    });
  }

  onEdit(){
    this.Test = false;
    this.TodoGroup.get('todoInfo').enable()
  }

  onSaveEdit(){
    this.todoService.updateTodo(this.id, this.TodoGroup.value)
  }

  onExecuted() {
    this.todoService.deleteTodo(this.id);
    this.router.navigate(['todo-list'])
  }

}
