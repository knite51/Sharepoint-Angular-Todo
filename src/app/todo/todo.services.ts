import { Subject } from "rxjs";
import { TodoModel } from "../shared/todo-model";
import { Injectable } from "@angular/core";

@Injectable()
export class TodoService {
  todoChanged = new Subject<TodoModel[]>();

  private Todo: TodoModel [] = [
    new TodoModel('Wash My Clothes'),
    new TodoModel('Clean the House')
  ];

  constructor() { }

  getTodo(){
    return this.Todo.slice();
  }

  addNewTodo(newTodo: TodoModel){
    this.Todo.push(newTodo);
    this.todoChanged.next(this.Todo.slice());
  }

  updateTodo(index: number, updateTodo: TodoModel){
    this.Todo[index] = updateTodo;
  }

  deleteTodo(index: number){
    this.Todo.splice(index, 1)
    this.todoChanged.next(this.Todo.slice())
  }
}
