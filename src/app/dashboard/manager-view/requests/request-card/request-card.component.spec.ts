import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestCardComponent } from './request-card.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MessageService } from 'primeng/api';
import { ToastService } from 'src/app/shared/toast.service';
import { DashboardService } from 'src/app/dashboard/service/dashboard.service';

describe('RequestCardComponent', () => {
  let component: RequestCardComponent;
  let fixture: ComponentFixture<RequestCardComponent>;
  let toastService: ToastService;
  let mockDashboardService: jasmine.SpyObj<DashboardService>;
  let mockMessageService: jasmine.SpyObj<MessageService>;

  beforeEach(async () => {
    mockDashboardService = jasmine.createSpyObj('DashboardService', [
      'approveRegistrationRequest',
    ]);
    mockMessageService = jasmine.createSpyObj('MessageService', ['add']);

    await TestBed.configureTestingModule({
      declarations: [RequestCardComponent],
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: DashboardService,
          useValue: mockDashboardService,
        },
        {
          provide: MessageService,
          useValue: mockMessageService,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RequestCardComponent);
    component = fixture.componentInstance;
    toastService = TestBed.inject(ToastService);
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { RequestCardComponent } from './request-card.component';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { MessageService } from 'primeng/api';
// import { ToastService } from 'src/app/shared/toast.service';
// import { DashboardService } from 'src/app/dashboard/service/dashboard.service';
// import { of, throwError } from 'rxjs';

// describe('RequestCardComponent', () => {
//   let component: RequestCardComponent;
//   let fixture: ComponentFixture<RequestCardComponent>;
//   let toastService: ToastService;
//   let mockDashboardService: jasmine.SpyObj<DashboardService>;
//   let mockMessageService: jasmine.SpyObj<MessageService>;

//   beforeEach(async () => {
//     mockDashboardService = jasmine.createSpyObj('DashboardService', [
//       'approveRegistrationRequest',
//       'approveModificationRequest',
//       'approveWithdrawRequest',
//       'onHandleRequest$',
//     ]);
//     mockMessageService = jasmine.createSpyObj('MessageService', ['add']);

//     await TestBed.configureTestingModule({
//       declarations: [RequestCardComponent],
//       imports: [HttpClientTestingModule],
//       providers: [
//         {
//           provide: DashboardService,
//           useValue: mockDashboardService,
//         },
//         {
//           provide: MessageService,
//           useValue: mockMessageService,
//         },
//       ],
//     }).compileComponents();

//     fixture = TestBed.createComponent(RequestCardComponent);
//     component = fixture.componentInstance;
//     toastService = TestBed.inject(ToastService);
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should handle registration request', () => {
//     const registrationRequest = {
//       name: 'John Doe',
//       email: 'johndoe@example.com',
//       phone_no: '1234567890',
//       id_proof_type: 'Passport',
//       id_proof: 'ABCD1234',
//       gender: 'Male',
//       user_id: 123,
//     };
//     const status = 'approved';
//     const response = { details: 'Registration request handled successfully' };

//     component.registrationRequest = registrationRequest;

//     mockDashboardService.approveRegistrationRequest.and.returnValue(
//       of(response)
//     );

//     component.handleRequest(status);

//     expect(
//       mockDashboardService.approveRegistrationRequest
//     ).toHaveBeenCalledWith(registrationRequest.user_id, status);
//     expect(toastService.showSuccess).toHaveBeenCalledWith(response.details);
//     expect(mockDashboardService.onHandleRequest$.next).toHaveBeenCalledWith(
//       true
//     );
//   });

//   it('should handle modification request', () => {
//     const modificationRequest = {
//       request_id: 456,
//       user_id: 123,
//       attribute_to_update: 'name',
//       attribute_value: 'John Doe',
//     };
//     const status = 'approved';
//     const response = { details: 'Modification request handled successfully' };

//     component.modificationRequest = modificationRequest;

//     mockDashboardService.approveModificationRequest.and.returnValue(
//       of(response)
//     );

//     component.handleRequest(status);

//     expect(
//       mockDashboardService.approveModificationRequest
//     ).toHaveBeenCalledWith(modificationRequest.request_id, status);
//     expect(toastService.showSuccess).toHaveBeenCalledWith(response.details);
//     expect(mockDashboardService.onHandleRequest$.next).toHaveBeenCalledWith(
//       true
//     );
//   });

//   it('should handle withdrawal request', () => {
//     const withdrawnRequest = {
//       request_id: 789,
//       user_id: 123,
//       debited_amount: '1000',
//       requested_by: 'John Doe',
//       date: '2021-08-01',
//     };
//     const status = 'approved';
//     const response = { details: 'Withdrawal request handled successfully' };

//     component.withdrawnRequest = withdrawnRequest;
//     component.modificationRequest = null;
//     component.registrationRequest = null;

//     mockDashboardService.approveWithdrawRequest.and.returnValue(of(response));

//     component.handleRequest(status);

//     expect(mockDashboardService.approveWithdrawRequest).toHaveBeenCalledWith(
//       withdrawnRequest.request_id,
//       status
//     );
//     expect(toastService.showSuccess).toHaveBeenCalledWith(response.details);
//     expect(mockDashboardService.onHandleRequest$.next).toHaveBeenCalledWith(
//       true
//     );
//   });

//   it('should handle error for registration request', () => {
//     const registrationRequest = {
//       name: 'John Doe',
//       email: 'johndoe@example.com',
//       phone_no: '1234567890',
//       id_proof_type: 'Passport',
//       id_proof: 'ABCD1234',
//       gender: 'Male',
//       user_id: 123,
//     };
//     const status = 'approved';

//     component.registrationRequest = registrationRequest;

//     mockDashboardService.approveRegistrationRequest.and.returnValue(
//       throwError('Error handling registration request')
//     );

//     component.handleRequest(status);

//     expect(
//       mockDashboardService.approveRegistrationRequest
//     ).toHaveBeenCalledWith(registrationRequest.user_id, status);
//     expect(toastService.showError).toHaveBeenCalledWith(
//       'Could not handle registration request'
//     );
//   });

//   it('should handle error for modification request', () => {
//     const modificationRequest = {
//       request_id: 456,
//       user_id: 123,
//       attribute_to_update: 'name',
//       attribute_value: 'John Doe',
//     };
//     const status = 'approved';

//     component.modificationRequest = modificationRequest;

//     mockDashboardService.approveModificationRequest.and.returnValue(
//       throwError('Error handling modification request')
//     );

//     component.handleRequest(status);

//     expect(
//       mockDashboardService.approveModificationRequest
//     ).toHaveBeenCalledWith(modificationRequest.request_id, status);
//     expect(toastService.showError).toHaveBeenCalledWith(
//       'Could not handle modification request'
//     );
//   });

//   it('should handle error for withdrawal request', () => {
//     const withdrawnRequest = {
//       request_id: 789,
//       user_id: 123,
//       debited_amount: '1000',
//       requested_by: 'John Doe',
//       date: '2021-08-01',
//     };
//     const status = 'approved';

//     component.withdrawnRequest = withdrawnRequest;

//     mockDashboardService.approveWithdrawRequest.and.returnValue(
//       throwError('Error handling withdrawal request')
//     );

//     component.handleRequest(status);

//     expect(mockDashboardService.approveWithdrawRequest).toHaveBeenCalledWith(
//       withdrawnRequest.request_id,
//       status
//     );
//     expect(toastService.showError).toHaveBeenCalledWith(
//       'Could not handle withdrawal request'
//     );
//   });
// });
