import { ToastService } from 'src/app/shared/toast.service';
import { CustomerService } from './../customer-view/service/customer.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
})
export class TransactionComponent {
  constructor(
    private customerService: CustomerService,
    private toast: ToastService
  ) {}
  transactions: [];

  ngOnInit(): void {
    this.getCustomerTransactions();
  }

  getCustomerTransactions() {
    this.customerService.getCustomerTransactions().subscribe({
      next: (data: []) => {
        this.transactions = data;
        console.log('transactions', data);
      },
      error: (error) => {
        this.toast.showError('Error while fetching transactions.');
      },
    });
  }
}
