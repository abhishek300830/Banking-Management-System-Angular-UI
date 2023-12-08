import { Component, OnInit, OnDestroy } from '@angular/core';
import { DashboardService } from './service/dashboard.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  currentTheme: string;
  themeSubscription: Subscription;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.themeSubscription = this.dashboardService.currentTheme$.subscribe(
      (theme) => {
        this.currentTheme = theme;
      }
    );
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe;
  }
}
