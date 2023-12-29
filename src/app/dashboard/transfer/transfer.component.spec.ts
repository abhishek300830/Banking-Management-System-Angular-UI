import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferComponent } from './transfer.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MessageService } from 'primeng/api';
import { FormsModule, NgForm } from '@angular/forms';
import { ToastService } from 'src/app/shared/toast.service';
import { Router } from '@angular/router';
import { DashboardService } from '../service/dashboard.service';
import { of, throwError } from 'rxjs';

describe('TransferComponent', () => {
  let component: TransferComponent;
  let fixture: ComponentFixture<TransferComponent>;
  let mockMessageService: jasmine.SpyObj<MessageService>;
  let mockDashboardService: jasmine.SpyObj<DashboardService>;
  let toastService: ToastService;
  let router: Router;

  beforeEach(async () => {
    mockMessageService = jasmine.createSpyObj('MessageService', ['add']);
    mockDashboardService = jasmine.createSpyObj('DashboardService', [
      'depositAmount',
      'withdrawAmount',
    ]);

    await TestBed.configureTestingModule({
      declarations: [TransferComponent],
      imports: [HttpClientTestingModule, FormsModule],
      providers: [
        {
          provide: MessageService,
          useValue: mockMessageService,
        },
        {
          provide: DashboardService,
          useValue: mockDashboardService,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TransferComponent);
    component = fixture.componentInstance;
    toastService = TestBed.inject(ToastService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show error message when form is invalid', () => {
    const toastSpy = spyOn(toastService, 'showError');
    component.onSubmit({ invalid: true } as NgForm);
    expect(toastSpy).toHaveBeenCalledWith('Please enter valid details');
  });

  it('should deposit amount when transfertype is deposit', () => {
    let mockFormDetails = {
      transfertype: 'deposit',
      'account-number': 1234567890,
      amount: 100,
    };
    const toastSpy = spyOn(toastService, 'showSuccess');
    mockDashboardService.depositAmount.and.returnValue(of(true));

    component.onSubmit({
      value: mockFormDetails,
      invalid: false,
    } as NgForm);

    expect(toastSpy).toHaveBeenCalledWith('Amount deposited successfully');
  });

  it('should withdraw amount when transfertype is withdraw', () => {
    let mockFormDetails = {
      transfertype: 'withdraw',
      'account-number': 1234567890,
      amount: 100,
    };
    const toastSpy = spyOn(toastService, 'showSuccess');
    mockDashboardService.withdrawAmount.and.returnValue(
      of({ details: 'Amount withdrawn successfully' })
    );

    component.onSubmit({
      value: mockFormDetails,
      invalid: false,
    } as NgForm);

    expect(toastSpy).toHaveBeenCalledWith('Amount withdrawn successfully');
  });

  it('should show error message when error code is 403 while withdrawing', () => {
    let mockFormDetails = {
      transfertype: 'withdraw',
      'account-number': 1234567890,
      amount: 100,
    };
    const toastSpy = spyOn(toastService, 'showError');
    spyOn(router, 'navigate');
    mockDashboardService.withdrawAmount.and.returnValue(
      throwError({ status: 403 })
    );

    component.onSubmit({
      value: mockFormDetails,
      invalid: false,
    } as NgForm);

    expect(toastSpy).toHaveBeenCalledWith('Please login again');
    expect(router.navigate).toHaveBeenCalledWith(['/login']);
  });

  it('should show error message when error code is 404 while withdrawing', () => {
    let mockFormDetails = {
      transfertype: 'withdraw',
      'account-number': 1234567890,
      amount: 100,
    };
    const toastSpy = spyOn(toastService, 'showError');
    mockDashboardService.withdrawAmount.and.returnValue(
      throwError({
        status: 404,
        error: { detail: { error: { message: 'error' } } },
      })
    );

    component.onSubmit({
      value: mockFormDetails,
      invalid: false,
    } as NgForm);

    expect(toastSpy).toHaveBeenCalledWith('error');
  });

  it('should show error message when error code is 400 while withdrawing', () => {
    let mockFormDetails = {
      transfertype: 'withdraw',
      'account-number': 1234567890,
      amount: 100,
    };

    const toastSpy = spyOn(toastService, 'showError');
    mockDashboardService.withdrawAmount.and.returnValue(
      throwError({ status: 400, error: { detail: 'bad request' } })
    );

    component.onSubmit({
      value: mockFormDetails,
      invalid: false,
    } as NgForm);

    expect(toastSpy).toHaveBeenCalledWith('bad request');
  });

  it('should show error message when error code is 403 while depositing', () => {
    let mockFormDetails = {
      transfertype: 'deposit',
      'account-number': 1234567890,
      amount: 100,
    };
    const toastSpy = spyOn(toastService, 'showError');
    spyOn(router, 'navigate');
    mockDashboardService.depositAmount.and.returnValue(
      throwError({ status: 403 })
    );

    component.onSubmit({
      value: mockFormDetails,
      invalid: false,
    } as NgForm);

    expect(toastSpy).toHaveBeenCalledWith('Please login again');
    expect(router.navigate).toHaveBeenCalledWith(['/login']);
  });

  it('should show error message when error code is 404 while depositing', () => {
    let mockFormDetails = {
      transfertype: 'deposit',
      'account-number': 1234567890,
      amount: 100,
    };
    const toastSpy = spyOn(toastService, 'showError');
    mockDashboardService.depositAmount.and.returnValue(
      throwError({
        status: 404,
        error: { detail: { error: { message: 'error' } } },
      })
    );

    component.onSubmit({
      value: mockFormDetails,
      invalid: false,
    } as NgForm);

    expect(toastSpy).toHaveBeenCalledWith('error');
  });
});
