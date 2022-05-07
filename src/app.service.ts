import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';


@Injectable()

export class AppService {
  constructor(private httpService: HttpService) {}

  findAll() {
    return this.httpService.get('https://jsonplaceholder.typicode.com/todos/').toPromise();
  }

  findten() {
    return this.httpService.get('https://jsonplaceholder.typicode.com/users').toPromise();
  }

  
  
}

  