import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDetailComponent } from './account-detail.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MessageService } from 'primeng/api';
import { CustomerService } from '../service/customer.service';
import { BehaviorSubject, of, throwError } from 'rxjs';
import { ToastService } from 'src/app/shared/toast.service';
import { Router } from '@angular/router';

describe('AccountDetailComponent', () => {
  let mockMessageService: jasmine.SpyObj<MessageService>;
  let mockCustomerService: jasmine.SpyObj<CustomerService>;
  let component: AccountDetailComponent;
  let fixture: ComponentFixture<AccountDetailComponent>;
  let mockToastService: jasmine.SpyObj<ToastService>;
  let mockRouter: jasmine.SpyObj<Router>;

  const mockData = {
    account_number: 1234567890,
    account_balance: 1000,
    pending_balance: 200,
  };

  let isAmountTransfered$ = new BehaviorSubject<boolean>(true);

  beforeEach(async () => {
    mockMessageService = jasmine.createSpyObj<MessageService>(
      'MessageService',
      ['add']
    );
    mockCustomerService = jasmine.createSpyObj<CustomerService>(
      'CustomerService',
      ['getCustomerBalance']
    );
    mockToastService = jasmine.createSpyObj<ToastService>('ToastService', [
      'showError',
    ]);
    mockRouter = jasmine.createSpyObj<Router>('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [AccountDetailComponent],
      imports: [HttpClientTestingModule],
      providers: [
        { provide: MessageService, useValue: mockMessageService },
        { provide: CustomerService, useValue: mockCustomerService },
        { provide: ToastService, useValue: mockToastService },
        { provide: Router, useValue: mockRouter },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AccountDetailComponent);
    component = fixture.componentInstance;
    mockCustomerService.isAmountTransfered$ = isAmountTransfered$;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call showCustomerBalance on ngOnInit', () => {
    spyOn(component, 'showCustomerBalance');
    mockCustomerService.isAmountTransfered$.next(false);

    component.ngOnInit();
    expect(component.showCustomerBalance).toHaveBeenCalled();
  });

  it('should call showCustomerBalance when isAmountTransfered$ emits', () => {
    spyOn(component, 'showCustomerBalance');
    component.ngOnInit();
    mockCustomerService.isAmountTransfered$.next(true);
    expect(component.showCustomerBalance).toHaveBeenCalledTimes(2);
  });

  it('should set accountNumber, accountBalance, balanceOnHold, and emit accountNumber', () => {
    spyOn(component.accountNumberEmitter, 'emit');
    mockCustomerService.getCustomerBalance.and.returnValue(of(mockData));
    component.showCustomerBalance();

    expect(component.accountNumber).toBe(mockData.account_number);
    expect(component.accountBalance).toBe(mockData.account_balance);
    expect(component.balanceOnHold).toBe(mockData.pending_balance);
    expect(component.accountNumberEmitter.emit).toHaveBeenCalledWith(
      mockData.account_number
    );
  });

  it('should show error message when error occurs', () => {
    mockCustomerService.getCustomerBalance.and.returnValue(
      throwError({ error: 'Test error' })
    );
    component.showCustomerBalance();
    expect(mockToastService.showError).toHaveBeenCalledWith(
      'Error Occured. Please try again.'
    );
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/login']);
  });
});
