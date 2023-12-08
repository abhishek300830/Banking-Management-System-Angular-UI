import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { DashboardService } from '../../service/dashboard.service';

@Component({
  selector: 'app-quick-transfer',
  templateUrl: './quick-transfer.component.html',
  styleUrls: ['./quick-transfer.component.scss'],
})
export class QuickTransferComponent {
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
