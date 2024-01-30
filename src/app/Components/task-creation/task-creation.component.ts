import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/Models/task.model';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-task-creation',
  templateUrl: './task-creation.component.html',
  styleUrls: ['./task-creation.component.css']
})
export class TaskCreationComponent {
  addtask:Task={
    taskId: 0,
    title: '',
    description: '',
    dueDate: new Date(),
    priority: '',
    status: '',
   
  };
  constructor(private dataservice:DataService, private router:Router) { }
  AddTask(){
    this.dataservice.TaskCreate(this.addtask).subscribe({
      next: (data) => {
        console.log(data);
        alert('Registration Successfull');
        this.router.navigate(['/departments/showalldepartments']);
        
      },
      error: (err) => {
        console.log(err);
      }
      
    })

  }
}
