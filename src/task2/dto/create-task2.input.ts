import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateTask2Input {
  @Field({ nullable: false })
  name: string;
}
