import { Body, Controller, Get, HttpStatus, Post, Res, Req } from '@nestjs/common';
import { UsersService } from 'src/services/users.service';
import { User } from 'src/interfaces/users.interfaces';
import { Request, Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async register(@Req() req: Request, @Res() res: Response) {
    const data = await this.usersService.register(req.body);
    return res.status(HttpStatus.OK).json(data);
  }

  @Post('login')
  async login(@Req() req: Request, @Res() res: Response) {
    const data = await this.usersService.login(req.body);
    return res.status(HttpStatus.OK).json(data);
  }
}
