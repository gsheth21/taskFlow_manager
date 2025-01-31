import { Injectable } from '@nestjs/common';
import { MongoService } from './mongo.service';

@Injectable()
export class UsersService {
  private readonly collectionName = 'users';

  constructor(private mongoService: MongoService) {}

  async createUser(body: any) {

    const newUser = {
      title: body.name,
      description: body.email,
      priority: body.password
    };

    const res = await this.mongoService.insertOne(this.collectionName, newUser);
    return res;
  }
}