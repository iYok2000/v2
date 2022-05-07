import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [HttpModule, TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
