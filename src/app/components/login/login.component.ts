import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/userModel';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  loginData: User = {
    email: this.email,
    password: this.password
  }
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}
  loginUser() {
    this.authService.login(this.loginData).subscribe((response) => {
      console.log('User', response);
      // store user in the local storage
      localStorage.setItem('token', response.token);
      this.router.navigate(['/dashboard'])

    }, (error)=>{
      console.log("Error occured", error)
    });
  }
}
