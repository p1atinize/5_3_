import {
  Controller,
  Request,
  Post,
  Body,
  UseGuards,
  Get,
  UsePipes,
} from '@nestjs/common';

@Controller()
export class AppController {
  constructor(

  ) {}

  @Get()
  hello() {
    return 'Hello World!';
  }


}
