import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DashboardService } from '../service/dashboard.service';
import { ToastService } from 'src/app/shared/toast.service';
import { Router } from '@angular/router';
import { TRANSFER_CONSTANTS } from 'src/app/shared/constants/dashboard-constants';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss'],
})
export class TransferComponent {
  constants = TRANSFER_CONSTANTS;
  @Input() currentTheme: string;

  constructor(
    private dashboardService: DashboardService,
    private toast: ToastService,
    private router: Router
  ) {}

  onSubmit(transferForm: NgForm): void {
    if (transferForm.invalid) {
      this.toast.showError('Please enter valid details');
      return;
    }
    const transferType = transferForm.value['transfertype'];
    const accountNumber = transferForm.value['account-number'];
    const amount = transferForm.value['amount'];

    if (transferType === 'deposit') {
      this.dashboardService.depositAmount(accountNumber, amount).subscribe({
        next: (response) => {
          this.toast.showSuccess('Amount deposited successfully');
        },
        error: (error) => {
          if (error.status === 403) {
            this.toast.showError('Please login again');
            this.router.navigate(['/login']);
          } else if (error.status === 404) {
            this.toast.showError(error.error.detail.error.message);
          }
        },
      });
    } else {
      this.dashboardService.withdrawAmount(accountNumber, amount).subscribe({
        next: (response) => {
          this.toast.showSuccess(response['details']);
        },
        error: (error) => {
          if (error.status === 403) {
            this.toast.showError('Please login again');
            this.router.navigate(['/login']);
          } else if (error.status === 404) {
            this.toast.showError(error.error.detail.error.message);
          } else if (error.status === 400) {
            this.toast.showError(error.error.detail);
          }
        },
      });
    }
  }
}
