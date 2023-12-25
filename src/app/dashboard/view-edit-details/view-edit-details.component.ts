import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DashboardService } from '../service/dashboard.service';
import { ToastService } from 'src/app/shared/toast.service';
import { Router } from '@angular/router';
import { VIEW_EDIT_DETAILS_CONSTANTS } from 'src/app/shared/constants/dashboard-constants';

@Component({
  selector: 'app-view-edit-details',
  templateUrl: './view-edit-details.component.html',
  styleUrls: ['./view-edit-details.component.scss'],
})
export class ViewEditDetailsComponent implements OnInit, OnDestroy {
  constants = VIEW_EDIT_DETAILS_CONSTANTS;
  isEditMode: boolean = false;
  accountNumber: number;
  customerDetails: Object;

  currentTheme: string;
  themeSubscription: Subscription;

  constructor(
    private dashboardService: DashboardService,
    private toast: ToastService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.themeSubscription = this.dashboardService.currentTheme$.subscribe(
      (theme) => {
        this.currentTheme = theme;
      }
    );
  }
  changeEditMode(event: boolean): void {
    this.isEditMode = event;
  }

  onSearch(): void {
    this.isEditMode = false;
    if (isNaN(this.accountNumber) || !this.accountNumber) {
      this.toast.showError('Please enter a valid account number');
      return;
    }
    this.dashboardService.getCustomerDetails(this.accountNumber).subscribe({
      next: (response) => {
        this.customerDetails = response['data'];
      },
      error: (error) => {
        if (error.status === 403) {
          this.toast.showError('Please login again');
          this.router.navigate(['/login']);
        } else {
          this.toast.showError(error.error.detail);
        }
      },
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
