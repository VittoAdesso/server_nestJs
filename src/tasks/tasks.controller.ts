import {
Controller,  
Get,  
Post,  
Put,  
Delete,  
Body,  
Param   
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create.task.dto';
// import { Request, Response} from "express";
import { TasksService } from './tasks.service';
import { Task } from './interfaces/Task';
@Controller('tasks')
export class TasksController {

    constructor(private tasksService: TasksService){}
    @Get()
    getAllTasks(){
        return this.tasksService.getAllTasks();
    }

    @Get(':taskId')
    getTaskId(@Param('taskId') taskId){
        return this.tasksService.getTasks(parseInt(taskId));
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
