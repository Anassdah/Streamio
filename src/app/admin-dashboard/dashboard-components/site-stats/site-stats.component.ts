import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-site-stats',
  templateUrl: './site-stats.component.html',
  styleUrls: ['./site-stats.component.scss']
})
export class SiteStatsComponent implements OnInit {

  public userCount: string | undefined;
  public gameCount: string | undefined;
  public articleCount: string | undefined;
  public eventCount: string | undefined;
  public reviewCount: string | undefined;
  public videoCount: string | undefined;

  /** Based on the screen size, switch from standard to one column per row */
  cards = [
    { title: 'Users', cols: 1, rows: 1 },
    { title: 'Games', cols: 1, rows: 1 },
    { title: 'Articles', cols: 1, rows: 1 },
    { title: 'Events', cols: 1, rows: 1 },
    { title: 'Reviews', cols: 1, rows: 1 },
    { title: 'Videos', cols: 1, rows: 1 },
  ];

  constructor( private dashboardService: DashboardService, private router: Router) { }

  async ngOnInit() {
    this.userCount = await this.dashboardService.getUserCount().toPromise();
    this.gameCount = await this.dashboardService.getGameCount().toPromise();
    this.reviewCount = await this.dashboardService.getReviewCount().toPromise();
    this.articleCount = await this.dashboardService.getArticleCount().toPromise();
    this.eventCount = await this.dashboardService.getEventCount().toPromise();
  }
}
