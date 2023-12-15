import { ToastService } from 'src/app/shared/toast.service';
import { CustomerService } from './../customer-view/service/customer.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
})
export class TransactionComponent {
  currentPage: number = 1;
  allTransactions: any[];
  transactions: any[];
  selectedDate: Date;

  constructor(
    private customerService: CustomerService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.getCustomerTransactions();
  }

  handleDateChange() {
    const dateToCompare = new Date(this.selectedDate).getDate();
    this.transactions = this.allTransactions.filter((transaction: any) => {
      const transactionDate = transaction['date_and_time'];
      const date = new Date(transactionDate).getDate();
      if (dateToCompare === date) {
        return transaction;
      }
    });
  }

  getCustomerTransactions() {
    this.customerService.getCustomerTransactions().subscribe({
      next: (data: []) => {
        this.allTransactions = data;
        this.transactions = data;
        console.log('transactions', data);
      },
      error: (error) => {
        this.toast.showError('Error while fetching transactions.');
      },
    });
  }
}
