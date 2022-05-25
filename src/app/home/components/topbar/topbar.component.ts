import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  @Input() search:string="";

  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  goToLogin() {
    this.router.navigateByUrl("/login");
  }
  gotoProfile() {
    this.router.navigate(
      ['/profile/'+ this.auth.getUser_id()]
    );
  } 

}
