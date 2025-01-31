import { Injectable } from '@nestjs/common';
import { MongoService } from './mongo.service';

@Injectable()
export class TasksService {
  private readonly collectionName = 'tasks';

  constructor(private mongoService: MongoService) {}

  async createTask(body: any) {

    const newTask = {
      title: body.title,
      description: body.description,
      priority: body.priority,
      dueDate: body.dueDate,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const res = await this.mongoService.insertOne(this.collectionName, newTask);
    return res;
  }
}