import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CustomerService {
  baseUrl = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) {}

  isAmountTransfered$ = new Subject<boolean>();

  getCustomerBalance() {
    console.log('hello');
    return this.http.get(`${this.baseUrl}/account/balance`);
  }

  transferFunds(amount: number, account: number) {
    return this.http.put(`${this.baseUrl}/account/transfer_amount`, {
      amount_to_transfer: amount,
      account_to_transfer: account,
    });
  }

  getCustomerTransactions() {
    return this.http.get(`${this.baseUrl}/account/passbook`);
  }
}
