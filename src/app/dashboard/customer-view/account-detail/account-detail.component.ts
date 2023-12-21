import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { ToastService } from 'src/app/shared/toast.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ACCOUNT_DETAIL_CONSTANTS } from 'src/assets/constants/dashboard-constants';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.scss'],
})
export class AccountDetailComponent implements OnInit {
  constants = ACCOUNT_DETAIL_CONSTANTS;
  @Input() currentTheme: string;
  accountNumber: number;
  accountBalance: number;
  balanceOnHold: number;

  @Output() accountNumberEmitter = new EventEmitter<number>();

  isTransferedSubscription: Subscription;

  constructor(
    private customerService: CustomerService,
    private toast: ToastService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.showCustomerBalance();
    this.isTransferedSubscription =
      this.customerService.isAmountTransfered$.subscribe((isTransfered) => {
        if (isTransfered) {
          this.showCustomerBalance();
        }
      });
  }
  showCustomerBalance() {
    this.customerService.getCustomerBalance().subscribe({
      next: (data) => {
        this.accountNumber = data['account_number'];
        this.accountBalance = data['account_balance'];
        this.balanceOnHold = data['pending_balance'];
        this.accountNumberEmitter.emit(this.accountNumber);
      },
      error: (error) => {
        this.toast.showError('Error Occured. Please try again.');
        console.log('response', error);
        this.router.navigate(['/login']);
      },
    });
  }
}
