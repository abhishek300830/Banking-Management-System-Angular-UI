import { Component, OnDestroy, OnInit } from '@angular/core';
import { DashboardService } from '../service/dashboard.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, OnDestroy {
  currentTheme: String;
  themeSubscription: Subscription;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.themeSubscription = this.dashboardService.currentTheme$.subscribe(
      (theme) => {
        this.currentTheme = theme;
      }
    );
  }

  changeTheme() {
    if (this.currentTheme === 'Light') {
      this.dashboardService.currentTheme$.next('Dark');
    } else {
      this.dashboardService.currentTheme$.next('Light');
    }
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
