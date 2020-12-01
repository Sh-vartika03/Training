import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
 @Input()
  todo: Todo = new Todo;
  constructor() { }

  ngOnInit(): void {
  }
  setClasses()
  {
    let classes={
      todo:true,
      'is-completed':this.todo.completed

    }
    return classes;
  }
  //toggle
  onToggle(todo: { completed: boolean; })
  {
    todo.completed=!todo.completed;
    console.log('toggle');
  }
  onDelete(todo: any){
    console.log("delete");
  }

}
