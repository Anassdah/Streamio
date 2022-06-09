import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-streamers',
  templateUrl: './streamers.component.html',
  styleUrls: ['./streamers.component.scss']
})
export class StreamersComponent implements OnInit {

  sub:string='subscribe';

  users: any = [];

  constructor(private dashboardService: DashboardService, private router: Router) { }

  async ngOnInit() {
    this.users = await this.dashboardService.getAllUsersPublic();
  }

  goToProfile(user_id: string){
    this.router.navigateByUrl("/profile/" + user_id)
  }

}
