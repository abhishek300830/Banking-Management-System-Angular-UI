import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { DashboardService } from '../../service/dashboard.service';
import { ToastService } from 'src/app/shared/toast.service';
import { REQUESTS_CONSTANTS } from 'src/assets/constants/dashboard-constants';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss'],
})
export class RequestsComponent {
  constants = REQUESTS_CONSTANTS;
  currentTheme: String;
  themeSubscription: Subscription;
  filteredRequests: string = '';
  isLoading = true;

  modificationRequests = [];
  registrationRequests = [];
  withdrawnRequests = [];

  constructor(
    private dashboardService: DashboardService,
    private toast: ToastService
  ) {}

  ngOnInit() {
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

  fetchAllRequests() {
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
  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
