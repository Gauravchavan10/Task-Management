import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user.model';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  adduser:User={
    userId: 0,
    username: '',
    email: '',
    password: ''
  };
  constructor(private dataservice:DataService, private router:Router) { }
  AddUser(){
    this.dataservice.Register(this.adduser).subscribe({
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
