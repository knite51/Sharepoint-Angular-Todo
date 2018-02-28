import { Component, OnInit, Output } from '@angular/core';
import { FormArray, FormGroup, FormControl } from '@angular/forms';
import { TodoService } from '../todo.services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})

export class TodoEditComponent implements OnInit {
  
  addTodoGroup: FormGroup;

  constructor(private todoService: TodoService,
              private router: Router,
              private route: ActivatedRoute) { }
  
  ngOnInit() {
      const newControl = new FormControl(null)
    this.addTodoGroup = new FormGroup({
      'todoInfo':newControl
    })
  }

onaddNewTodo(){
  this.todoService.addNewTodo(this.addTodoGroup.value);
  this.router.navigate(['../'], { relativeTo: this.route })
  }

onCancelTodo(){
    this.router.navigate(['../'], { relativeTo: this.route })
  }
  
}
