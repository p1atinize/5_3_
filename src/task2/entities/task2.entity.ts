import { ObjectType, Field, Int } from '@nestjs/graphql';
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@ObjectType()
@Entity()
export class Task2 {
  @PrimaryGeneratedColumn()
  @Field(type => Int)
  id: number;

  @Column()
  @Field({ nullable: false })
  name: string;
}
