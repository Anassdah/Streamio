import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  username = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');
  password_confirm = new FormControl('');
  registerSuccess = true;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  public attemptRegistration() {
    let username = this.username.value;
    let email = this.email.value;
    let password = this.password.value;
    let password_confirm = this.password_confirm.value;
    if (password == password_confirm) {
      this.auth.register(username, email, password).subscribe({
        next: authResult => {
          this.auth.setSession(authResult);
          this.registerSuccess = true;
          this.router.navigateByUrl('/');
        },
        error: error => {
          this.registerSuccess = false;
        }
      });
    } else {
      this.registerSuccess = false;
      console.log("passwords do not match");
    }
  }

}
