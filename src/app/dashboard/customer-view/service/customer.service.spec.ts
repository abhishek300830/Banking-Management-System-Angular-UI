import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { CustomerService } from './customer.service';

describe('CustomerService', () => {
  let service: CustomerService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CustomerService],
    });
    service = TestBed.inject(CustomerService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve customer balance', () => {
    const mockBalance = 1000;
    service.getCustomerBalance().subscribe((balance: number) => {
      expect(balance).toBe(mockBalance);
    });

    const req = httpMock.expectOne(`${service.baseUrl}/account/balance`);
    expect(req.request.method).toBe('GET');
    req.flush(mockBalance);
  });

  it('should transfer funds', () => {
    const mockAmount = 500;
    const mockAccount = 123456;
    service
      .transferFunds(mockAmount, mockAccount)
      .subscribe((response: any) => {
        expect(response).toBeTruthy();
      });

    const req = httpMock.expectOne(
      `${service.baseUrl}/account/transfer_amount`
    );
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual({
      amount_to_transfer: mockAmount,
      account_to_transfer: mockAccount,
    });
    req.flush({});
  });

  it('should get customer transactions', () => {
    const mockTransactions = [
      { id: 1, amount: 100, type: 'debit' },
      { id: 2, amount: 200, type: 'credit' },
    ];
    service.getCustomerTransactions().subscribe((transactions: any[]) => {
      expect(transactions).toEqual(mockTransactions);
    });

    const req = httpMock.expectOne(`${service.baseUrl}/account/passbook`);
    expect(req.request.method).toBe('GET');
    req.flush(mockTransactions);
  });
});
