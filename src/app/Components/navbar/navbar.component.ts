import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(public auth:AuthService, private router:Router){}

  loginhandler()
{
this.router.navigateByUrl('login')
}
logouthandler()
{
this.auth.logout()
this.router.navigateByUrl('login')
}

}
