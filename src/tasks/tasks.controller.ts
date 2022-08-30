import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateTaskDto } from './dto/create.task.dto';
import { Request, Response} from "express";
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

    @Put(':id')
    updateTask(@Body() task: CreateTaskDto, @Param('id')id ): string {
        return `Updating Task ${task} & ${id}`;
    }

    @Delete(':id')
    deleteTask(@Param('id') id) : string {
        return `Deleting Task number: ${id}`;
    }
}
