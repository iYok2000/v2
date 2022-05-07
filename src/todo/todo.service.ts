import { Injectable } from '@nestjs/common';
import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
  todoArray: Todo[] = []    

  addTodo(title: string, subtitle: string) {
    console.log(`Fromservice >> title:${title}, subtitle:${subtitle}`);
    const todo = new Todo();
    todo.id = '1';
    todo.title = title;
    todo.subtitle = subtitle;
    this.todoArray.push(todo);
  }

  getTodo(){
      return this.todoArray
  }
}

   