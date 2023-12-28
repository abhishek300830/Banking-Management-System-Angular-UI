import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickTransferComponent } from './quick-transfer.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MessageService } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../service/customer.service';
import { ToastService } from 'src/app/shared/toast.service';
import { Subject, of, throwError } from 'rxjs';

describe('QuickTransferComponent', () => {
  let component: QuickTransferComponent;
  let fixture: ComponentFixture<QuickTransferComponent>;
  let mockCustomerService: jasmine.SpyObj<CustomerService>;
  let mockMessageService: jasmine.SpyObj<MessageService>;
  let mockToastService: jasmine.SpyObj<ToastService>;

  let isAmountTransfered$ = new Subject<boolean>();

  beforeEach(async () => {
    mockCustomerService = jasmine.createSpyObj<CustomerService>(
      'CustomerService',
      ['transferFunds']
    );
    mockMessageService = jasmine.createSpyObj<MessageService>(
      'MessageService',
      ['add']
    );
    mockToastService = jasmine.createSpyObj<ToastService>('ToastService', [
      'showSuccess',
      'showError',
    ]);
    await TestBed.configureTestingModule({
      declarations: [QuickTransferComponent],
      imports: [HttpClientTestingModule, FormsModule],
      providers: [
        { provide: CustomerService, useValue: mockCustomerService },
        { provide: MessageService, useValue: mockMessageService },
        { provide: ToastService, useValue: mockToastService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(QuickTransferComponent);
    component = fixture.componentInstance;
    mockCustomerService.isAmountTransfered$ = isAmountTransfered$;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit the form ', () => {
    const formData: any = {
      value: {
        account: 1234567890,
        amount: 100,
      },
      reset: jasmine.createSpy('reset'),
    };
    mockCustomerService.transferFunds.and.returnValue(
      of({
        details: 'Transfer successful',
      })
    );
    component.onSubmit(formData);
    expect(mockCustomerService.transferFunds).toHaveBeenCalled();
    expect(mockToastService.showSuccess).toHaveBeenCalled();
    expect(mockToastService.showSuccess).toHaveBeenCalledWith(
      'Transfer successful'
    );
  });

  it('should handle error when submitting the form', () => {
    const formData: any = {
      value: {
        account: 1234567890,
        amount: 100,
      },
      reset: jasmine.createSpy('reset'),
    };
    const mockError = {
      error: { detail: { error: { message: 'Transfer failed' } } },
    };
    mockCustomerService.transferFunds.and.returnValue(throwError(mockError));
    component.onSubmit(formData);
    expect(mockCustomerService.transferFunds).toHaveBeenCalled();
    expect(mockToastService.showError).toHaveBeenCalled();
    expect(mockToastService.showError).toHaveBeenCalledWith('Transfer failed');
  });
});
