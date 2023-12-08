import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { DashboardService } from '../service/dashboard.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss'],
})
export class DashboardHeaderComponent implements OnInit, OnDestroy {
  currentTheme: String;
  themeSubscription: Subscription;
  @Input() username: string;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.themeSubscription = this.dashboardService.currentTheme$.subscribe(
      (theme) => {
        this.currentTheme = theme;
      }
    );
  }
  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
