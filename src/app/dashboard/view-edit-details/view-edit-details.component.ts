import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { DashboardService } from '../service/dashboard.service';

@Component({
  selector: 'app-view-edit-details',
  templateUrl: './view-edit-details.component.html',
  styleUrls: ['./view-edit-details.component.scss'],
})
export class ViewEditDetailsComponent {
  isEditMode: boolean = false;

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
  changeEditMode(event: boolean) {
    this.isEditMode = event;
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
