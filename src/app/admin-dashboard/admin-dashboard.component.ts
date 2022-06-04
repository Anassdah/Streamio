import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Users', cols: 1, rows: 1 },
          { title: 'Games', cols: 1, rows: 1 },
          { title: 'Articles', cols: 1, rows: 1 },
          { title: 'Reviews', cols: 1, rows: 1 },
          { title: 'Videos', cols: 1, rows: 1 },
        ];
      }

      return [
        { title: 'Users', cols: 2, rows: 1 },
        { title: 'Games', cols: 1, rows: 1 },
        { title: 'Articles', cols: 1, rows: 1 },
        { title: 'Reviews', cols: 1, rows: 1 },
        { title: 'Videos', cols: 1, rows: 1 },
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
