import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Models/user.model';
import { Observable } from 'rxjs';
import { Task } from '../Models/task.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseApiUrl:string = "localhost3000";
  constructor(private http:HttpClient) { }
  
  Register(user:User):Observable<User>{
    return this.http.post<User>(this.baseApiUrl + '/departments',user);
  }

  TaskCreate(task:Task):Observable<Task>{
    return this.http.post<Task>(this.baseApiUrl + '/departments',task);
  }
}
