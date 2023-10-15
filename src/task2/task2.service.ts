import { Injectable } from '@nestjs/common';
import { CreateTask2Input } from './dto/create-task2.input';
import { UpdateTask2Input } from './dto/update-task2.input';
import { Task2 } from "./entities/task2.entity";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class Task2Service {
  constructor(
    @InjectRepository(Task2)
    private repository: Repository<Task2>,
  ) {}

  create(CreateTask2Input: CreateTask2Input) {
    return this.repository.save(CreateTask2Input);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id });
  }

  update(id: number, UpdateTask2Input: UpdateTask2Input) {
    return this.repository.save({id, ...UpdateTask2Input});
  }

  async remove(id: number) {
    await this.repository.delete(id);
  }
}
