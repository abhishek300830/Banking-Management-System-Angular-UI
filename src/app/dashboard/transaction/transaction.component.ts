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
  emptyTransactions: boolean = false;

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
    this.emptyTransactions = this.transactions.length === 0 ? true : false;
  }

  getCustomerTransactions() {
    this.customerService.getCustomerTransactions().subscribe({
      next: (data: []) => {
        this.allTransactions = data;
        this.transactions = data;
        if (data.length === 0) {
          this.emptyTransactions = true;
        }
      },
      error: (error) => {
        this.emptyTransactions = true;
        this.toast.showError(error.error.detail);
      },
    });
  }
}
