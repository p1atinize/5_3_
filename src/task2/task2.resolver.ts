import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Task2Service } from './task2.service';
import { Task2 } from './entities/task2.entity';
import { CreateTask2Input } from './dto/create-task2.input';
import { UpdateTask2Input } from './dto/update-task2.input';

@Resolver(() => Task2)
export class Task2Resolver {
  constructor(private readonly task2Service: Task2Service) {}

  @Mutation(() => Task2)
  createTask2(@Args('createTask2Input') createTask2Input: CreateTask2Input) {
    return this.task2Service.create(createTask2Input);
  }

  @Query(() => [Task2], { name: 'task22' })
  findAll() {
    return this.task2Service.findAll();
  }

  @Query(() => Task2, { name: 'task2' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.task2Service.findOne(id);
  }

  @Mutation(() => Task2)
  updateTask2(@Args('updateTask2Input') updateTask2Input: UpdateTask2Input) {
    return this.task2Service.update(updateTask2Input.id, updateTask2Input);
  }

  @Mutation(() => Task2)
  removeTask2(@Args('id', { type: () => Int }) id: number) {
    return this.task2Service.remove(id);
  }
}
