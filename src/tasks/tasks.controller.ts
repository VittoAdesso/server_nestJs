import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { CreateTaskDto } from './dto/create.task.dto';
@Controller('tasks')
export class TasksController {

    @Get()
    getTask() : string {
            return 'Return Tasks';
        }

    @Post()
    createTask(@Body() task: CreateTaskDto): string {
        return 'Creating task'
    }

    @Put()
    updateTask() : string {
        return 'Updating Task';
    }

    @Delete()
    deleteTask() : string {
        return 'Deleting Task';
    }
}
