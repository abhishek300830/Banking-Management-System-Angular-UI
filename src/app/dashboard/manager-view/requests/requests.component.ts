import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { DashboardService } from '../../service/dashboard.service';
import { ToastService } from 'src/app/shared/toast.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss'],
})
export class RequestsComponent {
  currentTheme: String;
  themeSubscription: Subscription;
  // currentPage: number = 1;

  modificationRequests: [];
  registrationRequests: [];
  withdrawnRequests: [];

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
    this.fetchAllRequests();

    this.dashboardService.onHandleRequest$.subscribe((response) => {
      this.fetchAllRequests();
    });
  }

  fetchAllRequests() {
    this.dashboardService.getAllRequests().subscribe({
      next: (response) => {
        this.modificationRequests = response['modification_requests'];
        this.registrationRequests = response['new_registration_requests'];
        this.withdrawnRequests = response['withdrawn_requests'];

        console.log(
          this.modificationRequests,
          this.registrationRequests,
          this.withdrawnRequests
        );
      },
      error: (error) => {
        this.toast.showError("Couldn't fetch requests try again later");
        console.log(error);
      },
    });
  }
  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
