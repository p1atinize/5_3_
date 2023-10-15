import { Module } from '@nestjs/common';
import { Task2Service } from './task2.service';
import { Task2Resolver } from './task2.resolver';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Task2} from "./entities/task2.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Task2])],
  providers: [Task2Resolver, Task2Service],
})
export class Task2Module {}
