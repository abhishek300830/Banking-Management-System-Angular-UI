import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { DashboardService } from '../service/dashboard.service';
import { ToastService } from 'src/app/shared/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-edit-details',
  templateUrl: './view-edit-details.component.html',
  styleUrls: ['./view-edit-details.component.scss'],
})
export class ViewEditDetailsComponent {
  isEditMode: boolean = false;
  accountNumber: number;
  customerDetails: Object;

  currentTheme: String;
  themeSubscription: Subscription;

  constructor(
    private dashboardService: DashboardService,
    private toast: ToastService,
    private router: Router
  ) {}

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

  onSearch() {
    this.isEditMode = false;
    if (isNaN(this.accountNumber) || this.accountNumber === undefined) {
      this.toast.showError('Please enter a valid account number');
      return;
    }
    this.dashboardService.getCustomerDetails(this.accountNumber).subscribe({
      next: (response) => {
        this.customerDetails = response['data'];
        console.log(response);
      },
      error: (error) => {
        if (error.status === 403) {
          this.toast.showError('Please login again');
          this.router.navigate(['/login']);
        } else {
          this.toast.showError(error.error.detail);
          console.log(error);
        }
      },
    });
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
