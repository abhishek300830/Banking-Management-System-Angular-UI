import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CustomerService {
  constructor(private http: HttpClient) {}

  isAmountTransfered$ = new Subject<boolean>();

  getCustomerBalance() {
    return this.http.get(`http://127.0.0.1:8000/account/balance`);
  }

  transferFunds(amount: number, account: number) {
    return this.http.put('http://127.0.0.1:8000/account/transfer_amount', {
      amount_to_transfer: amount,
      account_to_transfer: account,
    });
  }

  getCustomerTransactions() {
    return this.http.get(`http://127.0.0.1:8000/account/passbook`);
  }
}
