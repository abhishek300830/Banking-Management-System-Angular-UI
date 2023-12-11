import { Component, EventEmitter, Output } from '@angular/core';
import { DashboardService } from '../../service/dashboard.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-view-customer-details',
  templateUrl: './view-customer-details.component.html',
  styleUrls: ['./view-customer-details.component.scss'],
})
export class ViewCustomerDetailsComponent {
  @Output() isEditMode = new EventEmitter();

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

  changeEditMode() {
    this.isEditMode.emit(true);
  }
}
