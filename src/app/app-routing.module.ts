import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Pages/register/register.component';
import { LoginComponent } from './Pages/login/login.component';
import { TaskCreationComponent } from './Components/task-creation/task-creation.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
{path:'task_create', component:TaskCreationComponent},
  {path:'register' ,component:RegisterComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
