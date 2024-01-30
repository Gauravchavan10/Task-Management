import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

 text=''
 alertclass=''
  constructor(private fb: FormBuilder, private auth:AuthService)
  {

  }

  loginForm=this.fb.group({
    email:[null,[Validators.required,Validators.email]],
    password:[null,[Validators.required, Validators.minLength(6)]]
  })

  get email()
  {
    return this.loginForm.get('email')
  }
  get password()
  {
    return this.loginForm.get('password')
  }
onsubmithandler()
{
  // console.log(this.loginForm.value)
  this.auth.login(this.loginForm.value).subscribe((response:any)=>
  {
this.text='login succesfull, thank you'
this.alertclass='alert alert-success'
localStorage.setItem('token',response.access_token)
  },(error:any)=>{
    this.text='login failed, try again'
    this.alertclass='alert alert-danger'
  });
  
}

}
