import { ObjectId } from "mongodb";

export interface Task {
    _id?: ObjectId;
    title: string;
    description: string;
    priority: string;
    // priority: 'low' | 'medium' | 'high';
    dueDate: string;
    createdAt?: Date;
    updatedAt?: Date;
  }