import { Injectable } from '@nestjs/common';
import { MongoService } from './mongo.service';

@Injectable()
export class UsersService {
  private readonly collectionName = 'users';

  constructor(private mongoService: MongoService) {}

  async register(body: any) {

    const newUser = {
      name: body.name,
      email: body.email,
      password: body.password
    };

    const res = await this.mongoService.insertOne(this.collectionName, newUser);
    return res;
  }

  async login(body: any) {
    const email = body.email;
    const password = body.password;

    const res = await this.mongoService.findByEmail(this.collectionName, email);
    if(res.password === password) return true;
    return false;
  }
}