import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-user-stats',
  templateUrl: './user-stats.component.html',
  styleUrls: ['./user-stats.component.scss']
})
export class UserStatsComponent implements OnInit {

  users : Array<any> | undefined;

  constructor(private dashboardService: DashboardService) { }

  async ngOnInit() {
    this.users = await this.dashboardService.getAllUsers();
  }

}
