import { ToastService } from 'src/app/shared/toast.service';
import { CustomerService } from './../customer-view/service/customer.service';
import { Component, OnInit } from '@angular/core';
import { TRANSACTION_CONSTANTS } from 'src/app/shared/constants/dashboard-constants';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
})
export class TransactionComponent implements OnInit {
  constants = TRANSACTION_CONSTANTS;
  currentPage: number = 1;
  allTransactions: string[];
  transactions: string[];
  selectedDate: Date;
  tomorrow: Date = new Date();
  emptyTransactions: boolean = false;
  isLoading: boolean = true;

  constructor(
    private customerService: CustomerService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.getCustomerTransactions();
  }

  handleDateChange(): void {
    this.isLoading = true;
    const dateToCompare = new Date(this.selectedDate).getDate();
    this.transactions = this.allTransactions.filter((transaction: any) => {
      const transactionDate = transaction['date_and_time'];
      const date = new Date(transactionDate).getDate();
      if (dateToCompare === date) {
        return transaction;
      }
    });
    this.emptyTransactions = this.transactions.length === 0;
    this.isLoading = false;
  }

  getCustomerTransactions(): void {
    this.customerService.getCustomerTransactions().subscribe({
      next: (data: string[]) => {
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
    this.isLoading = false;
  }

  getMaxDate(): Date {
    return new Date();
  }
}
