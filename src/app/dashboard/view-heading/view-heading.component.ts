import { Component, Input } from '@angular/core';
import { DashboardService } from '../service/dashboard.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-view-heading',
  templateUrl: './view-heading.component.html',
  styleUrls: ['./view-heading.component.scss'],
})
export class ViewHeadingComponent {
  @Input() title: string;
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
