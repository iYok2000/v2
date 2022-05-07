import { Body, Controller, Get, Post } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
    constructor(private todoService:TodoService){}
    @Post()
    postTOdo(@Body("title") title:string, @Body("subtitle") subtitle:string){
       this.todoService.addTodo(title,subtitle);
    }

    @Get()
    getTodos(){
        return this.todoService.getTodo()
    }
}
