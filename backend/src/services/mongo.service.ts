import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { MongoClient, Db, ObjectId } from 'mongodb';

import * as dotenv from 'dotenv';

dotenv.config(); // Load environment variables

@Injectable()
export class MongoService implements OnModuleInit, OnModuleDestroy {
  private client: MongoClient;
  private db: Db;

  async onModuleInit() {
    const uri = process.env.MONGODB_URI;
    const dbName = process.env.MONGODB_NAME;
    
    if(uri) { 
        this.client = new MongoClient(uri);
        await this.client.connect();
        this.db = this.client.db(dbName);
        console.log('Connected to MongoDB');
    }
  }

  async onModuleDestroy() {
    await this.client.close();
    console.log('Disconnected from MongoDB');
  }

  async getCollection(collectionName: string) {
    const existingCollections = await this.db.listCollections({}, { nameOnly: true }).toArray();
    const collectionNames = existingCollections.map(col => col.name);

    if (!collectionNames.includes(collectionName)) {
      await this.db.createCollection(collectionName);
    }
    return this.db.collection(collectionName);
  }

  async insertOne(collectionName: string, document: any) {
    const collection = await this.getCollection(collectionName);
    return collection.insertOne(document);
  }

  async find(collectionName: string, query: object = {}) {
    const collection = await this.getCollection(collectionName);
    return collection.find(query).toArray();
  }

  async findById(collectionName: string, id: string) {
    const collection = await this.getCollection(collectionName);
    return collection.findOne({ _id: new ObjectId(id) });
  }

  async updateOne(collectionName: string, id: string, update: object) {
    const collection = await this.getCollection(collectionName);
    return collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: update }
    );
  }

  async deleteOne(collectionName: string, id: string) {
    const collection = await this.getCollection(collectionName);
    return collection.deleteOne({ _id: new ObjectId(id) });
  }
}