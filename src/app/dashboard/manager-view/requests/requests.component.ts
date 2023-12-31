import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DashboardService } from '../../service/dashboard.service';
import { ToastService } from 'src/app/shared/toast.service';
import { REQUESTS_CONSTANTS } from 'src/app/shared/constants/dashboard-constants';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss'],
})
export class RequestsComponent implements OnInit, OnDestroy {
  constants = REQUESTS_CONSTANTS;
  currentTheme: string;
  themeSubscription: Subscription;
  filteredRequests: string = '';
  isLoading: boolean = true;

  modificationRequests: [] = [];
  registrationRequests: [] = [];
  withdrawnRequests: [] = [];

  constructor(
    private dashboardService: DashboardService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.themeSubscription = this.dashboardService.currentTheme$.subscribe(
      (theme) => {
        this.currentTheme = theme;
      }
    );
    this.isLoading = true;
    this.fetchAllRequests();

    this.dashboardService.onHandleRequest$.subscribe((response) => {
      this.isLoading = true;
      this.fetchAllRequests();
    });
  }

  fetchAllRequests(): void {
    this.dashboardService.getAllRequests().subscribe({
      next: (response) => {
        this.modificationRequests = response['modification_requests'];
        this.registrationRequests = response['new_registration_requests'];
        this.withdrawnRequests = response['withdrawn_requests'];
      },
      error: (error) => {
        this.toast.showError(error.error.detail);
      },
    });
    this.isLoading = false;
  }
  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
