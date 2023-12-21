import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DashboardService {
  currentTheme$ = new BehaviorSubject('Light');
  onHandleRequest$ = new Subject();

  constructor(private http: HttpClient) {}

  changePassword(oldPassword: string, newPassword: string) {
    return this.http.put('http://127.0.0.1:8000/changepassword', {
      old_password: oldPassword,
      new_password: newPassword,
    });
  }

  depositAmount(accountNumber: number, amount: number) {
    return this.http.put('http://127.0.0.1:8000/account/deposit', {
      account_number: accountNumber,
      amount: amount,
    });
  }

  withdrawAmount(accountNumber: number, amount: number) {
    return this.http.put('http://127.0.0.1:8000/account/withdraw', {
      account_number: accountNumber,
      amount: amount,
    });
  }

  registerCustomer(customerDetails: Object) {
    return this.http.post('http://127.0.0.1:8000/customer', customerDetails);
  }

  getCustomerDetails(accountNumber: number) {
    return this.http.get(`http://127.0.0.1:8000/customer/${accountNumber}`);
  }

  modifyCustomerDetails(
    accountNumber: number,
    attibute_name: string,
    attribute_value: string
  ) {
    return this.http.put('http://127.0.0.1:8000/customer', {
      account_no: accountNumber.toString(),
      attribute_to_update: attibute_name,
      attribute_value: attribute_value.toString(),
    });
  }

  getAllRequests() {
    return this.http.get('http://127.0.0.1:8000/account/requests');
  }

  approveModificationRequest(requestId: number, status: string) {
    return this.http.put('http://127.0.0.1:8000/account/requests', {
      request_type: 'modification_request',
      request_id: requestId,
      status: status,
    });
  }

  approveWithdrawRequest(
    requestId: number,
    status: string,
    comment: string = 'Okay'
  ) {
    return this.http.put('http://127.0.0.1:8000/account/requests', {
      request_type: 'withdrawn_request',
      request_id: requestId,
      status: status,
      comment: comment,
    });
  }

  approveRegistrationRequest(userId: number, status: string) {
    return this.http.put('http://127.0.0.1:8000/account/requests', {
      request_type: 'registration_request',
      user_id: userId,
      status: status,
    });
  }
}
