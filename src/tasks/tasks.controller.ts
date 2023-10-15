import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  ParseIntPipe,
  UseInterceptors, ParseFilePipe, MaxFileSizeValidator, FileTypeValidator, UploadedFiles, Req
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { Task as taskEntity } from './entities/task.entity';
import {LoggingInterceptor} from "../interceptors/logging.interceptor";
import {FileInterceptor, FilesInterceptor} from '@nestjs/platform-express';
import { UploadedFile } from '@nestjs/common';
import { diskStorage } from "multer";

@ApiTags('Task')
@ApiBearerAuth()
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @UseGuards(AuthGuard('jwt'))
  @ApiResponse({
    status: 201,
    description: 'Задача успешно добавлена',
    type: taskEntity,
  })
  @ApiResponse({ status: 401, description: 'Неавторизован' })
  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  @Get()
  findAll() {
    return this.tasksService.findAll();
  }

  @Get(':id')
  @UseInterceptors(LoggingInterceptor)
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.tasksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(+id, updateTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tasksService.remove(+id);
  }

  @Post('upload2')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
  }

  @Post('upload/:id')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploadedFiles/tasks',
    })
  }))
  addFile(@Param('id', ParseIntPipe) id: number, @Req() request, @UploadedFile() file: Express.Multer.File) {
    console.log(id);
    return this.tasksService.setFile(id, {
      file_path: file.path,
      user_id: 1,
      name: 'cvddcdccd',
    });
  }
}
