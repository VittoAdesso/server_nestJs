import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateTaskDto } from './dto/create.task.dto';
@Controller('tasks')
export class TasksController {

    @Get()
    getTask() : {hello: string} {
            return {"hello": "world"};
        }

    @Post()
    createTask(@Body() task: CreateTaskDto): string {
        return 'Creating task'
    }

    @Put()
    updateTask() : string {
        return 'Updating Task';
    }

    @Delete(':id')
    deleteTask(@Param('id') id) : string {
        return `Deleting Task number: ${id}`;
    }
}
