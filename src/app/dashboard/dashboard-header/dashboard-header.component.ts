import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { DashboardService } from '../service/dashboard.service';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss'],
})
export class DashboardHeaderComponent implements OnInit {
  @Input() username: string;
  currentTheme: string;

  constructor(private dashboardService: DashboardService) {}
  ngOnInit(): void {
    this.dashboardService.currentTheme$.subscribe((theme) => {
      this.currentTheme = theme;
    });
  }

  changeTheme(): void {
    if (this.currentTheme === 'Dark') {
      this.dashboardService.currentTheme$.next('Light');
    } else {
      this.dashboardService.currentTheme$.next('Dark');
    }
  }
}
