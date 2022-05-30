import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  email = new FormControl('');
  password = new FormControl('');
  loginSuccess = true;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  public attemptLogin() {
    let email = this.email.value;
    let password = this.password.value;

    this.auth.login(email, password).subscribe({
      next: authResult => {
        console.log(authResult);
        this.auth.setSession(authResult);
        this.loginSuccess = true;
        this.router.navigateByUrl('/');
      },
      error: error => {
        this.loginSuccess = false;
      }
    });
  }

  public goToRegistration() {
    this.router.navigateByUrl("/register")
  }

}
