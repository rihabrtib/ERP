import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = ''
  password = ''
  invalidLogin = false
  constructor(private loginservice: AuthenticationService,private router: Router) { }

  ngOnInit() {
  }
  checkLogin() {
    if (this.loginservice.authenticate(this.username, this.password)
    ) {
      
      this.invalidLogin = false
      this.router.navigate(['dashboard']);
    } else
      this.invalidLogin = true
  }

}
