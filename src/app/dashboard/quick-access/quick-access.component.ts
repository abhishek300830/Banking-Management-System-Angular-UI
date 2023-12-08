import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { DashboardService } from '../service/dashboard.service';

@Component({
  selector: 'app-quick-access',
  templateUrl: './quick-access.component.html',
  styleUrls: ['./quick-access.component.scss'],
})
export class QuickAccessComponent {
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
  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
