import { Test, TestingModule } from '@nestjs/testing';
import { Task2Resolver } from './task2.resolver';
import { Task2Service } from './task2.service';

describe('Task2Resolver', () => {
  let resolver: Task2Resolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Task2Resolver, Task2Service],
    }).compile();

    resolver = module.get<Task2Resolver>(Task2Resolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
