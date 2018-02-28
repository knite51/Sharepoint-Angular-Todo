import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.services';
import { Subject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { TodoModel } from '../../shared/todo-model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoInfos: TodoModel[];
  todo: TodoModel;

  constructor(private todoService: TodoService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.todoInfos = this.todoService.getTodo();
  }

  onAddTodo(){
    this.router.navigate(['new'], { relativeTo: this.route });
  }
 
}
