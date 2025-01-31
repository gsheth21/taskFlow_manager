import { Body, Controller, Get, HttpStatus, Post, Res, Req } from '@nestjs/common';
import { TasksService } from 'src/services/tasks.service';
import { Request, Response } from 'express';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post('createTask')
  async createTask(@Req() req: Request, @Res() res: Response) {
    const data = await this.tasksService.createTask(req.body);
    return res.status(HttpStatus.OK).json(data);
  }
}
