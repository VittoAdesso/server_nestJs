import { Injectable } from '@nestjs/common';
import { Task } from './interfaces/Task'; 

@Injectable()
export class TasksService {

    tasks: Task[] = [
        {
            id: 1,
            title: 'Testing',
            description: 'test desc ',
            done: true,
        }, 
        {
            id: 2,
            title: 'Testings',
            description: 'test all',
            done: false,
        }
    ];

    // return all tasks
    getAllTasks(): Task[] {
        return this.tasks;
    }

      // return all tasks by id, and comprueba
      getTasks(id: number): Task{
        return this.tasks.find(task => task.id === id);
    }
}
