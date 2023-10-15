import { CreateTask2Input } from './create-task2.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTask2Input extends PartialType(CreateTask2Input) {
  @Field(type => Int)
  id: number;
}
