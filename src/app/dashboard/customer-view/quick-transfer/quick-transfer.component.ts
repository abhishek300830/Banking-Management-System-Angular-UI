import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastService } from 'src/app/shared/toast.service';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-quick-transfer',
  templateUrl: './quick-transfer.component.html',
  styleUrls: ['./quick-transfer.component.scss'],
})
export class QuickTransferComponent {
  @Input() currentTheme: String;

  constructor(
    private customerService: CustomerService,
    private toast: ToastService
  ) {}

  onSubmit(quickTransferForm: NgForm) {
    const account = quickTransferForm.value.account;
    const amount = quickTransferForm.value.amount;

    this.customerService.transferFunds(amount, account).subscribe({
      next: (data) => {
        this.toast.showSuccess(data['details']);
        this.customerService.isAmountTransfered$.next(true);
      },
      error: (error) => {
        const errorMessage = error.error.detail.error.message;
        this.toast.showError(errorMessage);
      },
    });
    quickTransferForm.reset();
  }
}
