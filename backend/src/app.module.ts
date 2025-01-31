import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksController } from './controllers/tasks.controller';
import { TasksService } from './services/tasks.service';
import { MongoService } from './services/mongo.service';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';

@Module({
  imports: [],
  controllers: [AppController, TasksController, UsersController],
  providers: [AppService, TasksService, MongoService, UsersService],
})
export class AppModule {}
