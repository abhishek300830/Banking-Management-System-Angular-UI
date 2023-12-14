import { Component, Input } from '@angular/core';
import { DashboardService } from 'src/app/dashboard/service/dashboard.service';
import { ToastService } from 'src/app/shared/toast.service';

@Component({
  selector: 'app-request-card',
  templateUrl: './request-card.component.html',
  styleUrls: ['./request-card.component.scss'],
})
export class RequestCardComponent {
  @Input() currentTheme: String;

  @Input() registrationRequest: Object;
  @Input() modificationRequest: Object;
  @Input() withdrawnRequest: Object;

  constructor(
    private dashboardService: DashboardService,
    private toast: ToastService
  ) {}

  handleRequest(status: string) {
    if (this.registrationRequest) {
      console.log(this.registrationRequest);
      this.dashboardService
        .approveRegistrationRequest(this.registrationRequest['user_id'], status)
        .subscribe({
          next: (response) => {
            console.log(response);
            this.toast.showSuccess(response['details']);
          },
          error: (error) => {
            this.toast.showError('Could not handle registration request');
          },
        });
    } else if (this.modificationRequest) {
      this.dashboardService
        .approveModificationRequest(
          this.modificationRequest['request_id'],
          status
        )
        .subscribe({
          next: (response) => {
            console.log(response);
            this.toast.showSuccess(response['details']);
          },
          error: (error) => {
            this.toast.showError('Could not handle modification request');
          },
        });
    } else if (this.withdrawnRequest) {
      this.dashboardService
        .approveWithdrawRequest(this.withdrawnRequest['request_id'], status)
        .subscribe({
          next: (response) => {
            console.log(response);
            this.toast.showSuccess(response['details']);
          },
          error: (error) => {
            this.toast.showError('Could not handle withdrawal request');
          },
        });
    } else {
      console.log('No request to approve');
      return;
    }
    this.dashboardService.onHandleRequest$.next(true);
  }
}
