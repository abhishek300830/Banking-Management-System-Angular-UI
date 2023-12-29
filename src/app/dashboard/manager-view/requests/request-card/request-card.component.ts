import { Component, Input } from '@angular/core';
import { DashboardService } from 'src/app/dashboard/service/dashboard.service';
import { ToastService } from 'src/app/shared/toast.service';
import { REQUEST_CARD_CONSTANTS } from 'src/app/shared/constants/dashboard-constants';

interface RegistrationRequest {
  name: string;
  email: string;
  phone_no: string;
  id_proof_type: string;
  id_proof: string;
  gender: string;
  user_id: number;
}
interface ModificationRequest {
  request_id: number;
  user_id: number;
  attribute_to_update: string;
  attribute_value: string;
}

interface WithdrawnRequest {
  request_id: number;
  user_id: number;
  debited_amount: string;
  requested_by: string;
  date: string;
}

@Component({
  selector: 'app-request-card',
  templateUrl: './request-card.component.html',
  styleUrls: ['./request-card.component.scss'],
})
export class RequestCardComponent {
  constants = REQUEST_CARD_CONSTANTS;
  @Input() currentTheme: string;

  @Input() registrationRequest: RegistrationRequest;
  @Input() modificationRequest: ModificationRequest;
  @Input() withdrawnRequest: WithdrawnRequest;

  constructor(
    private dashboardService: DashboardService,
    private toast: ToastService
  ) {}

  handleRequest(status: string): void {
    if (this.registrationRequest) {
      this.dashboardService
        .approveRegistrationRequest(this.registrationRequest['user_id'], status)
        .subscribe({
          next: (response) => {
            this.toast.showSuccess(response['details']);
            this.dashboardService.onHandleRequest$.next(true);
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
            this.toast.showSuccess(response['details']);
            this.dashboardService.onHandleRequest$.next(true);
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
            this.toast.showSuccess(response['details']);
            this.dashboardService.onHandleRequest$.next(true);
          },
          error: (error) => {
            this.toast.showError('Could not handle withdrawal request');
          },
        });
    }
  }
}
