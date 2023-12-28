import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordComponent } from './change-password.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MessageService } from 'primeng/api';
import { FormsModule, NgForm } from '@angular/forms';
import { DashboardService } from '../service/dashboard.service';
import { BehaviorSubject, of, throwError } from 'rxjs';
import { ToastService } from 'src/app/shared/toast.service';

let mockCurrentTheme = new BehaviorSubject<string>('Light');

describe('ChangePasswordComponent', () => {
  let component: ChangePasswordComponent;
  let fixture: ComponentFixture<ChangePasswordComponent>;
  let mockMessageService: jasmine.SpyObj<MessageService>;
  let mockDashboardService: jasmine.SpyObj<DashboardService>;
  let mockToastService: jasmine.SpyObj<ToastService>;

  beforeEach(async () => {
    mockMessageService = jasmine.createSpyObj('MessageService', [
      'showSuccess',
      'showError',
    ]);
    mockDashboardService = jasmine.createSpyObj('DashboardService', [
      'changePassword',
      'mockCurrentTheme',
    ]);
    mockToastService = jasmine.createSpyObj('ToastService', [
      'showSuccess',
      'showError',
    ]);
    await TestBed.configureTestingModule({
      declarations: [ChangePasswordComponent],
      imports: [HttpClientTestingModule, FormsModule],
      providers: [
        { provide: MessageService, useValue: mockMessageService },
        { provide: DashboardService, useValue: mockDashboardService },
        { provide: ToastService, useValue: mockToastService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ChangePasswordComponent);
    mockDashboardService.currentTheme$ = mockCurrentTheme;
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should call onSubmit', () => {
    const changePasswordForm = <NgForm>{
      value: {
        oldpassword: 'oldpassword',
        newpassword: 'newpassword',
      },
    };
    mockDashboardService.changePassword.and.returnValue(of(true));
    component.onSubmit(changePasswordForm);
    expect(mockDashboardService.changePassword).toHaveBeenCalled();
  });

  it('should show error message error code is 404', () => {
    const form = <NgForm>{
      value: {
        oldpassword: 'oldPassword',
        newpassword: 'newPassword',
      },
    };
    mockDashboardService.changePassword.and.returnValue(
      throwError({ status: 404 })
    );
    component.onSubmit(form);
    expect(mockToastService.showError).toHaveBeenCalledWith(
      'Include Uppercase, Lowercase letters, numbers and special characters in your password. '
    );
  });

  it('should show error message when old password is incorrect', () => {
    const form = <NgForm>{
      value: {
        oldpassword: 'oldPassword',
        newpassword: 'newPassword',
      },
    };
    mockDashboardService.changePassword.and.returnValue(
      throwError({ status: 401 })
    );
    component.onSubmit(form);

    expect(mockToastService.showError).toHaveBeenCalledWith(
      'Old password is incorrect.'
    );
  });

  it('should call changePassword with correct arguments', () => {
    const form = <NgForm>{
      value: {
        oldpassword: 'oldPassword',
        newpassword: 'newPassword',
      },
    };
    mockDashboardService.changePassword.and.returnValue(of(true));
    component.onSubmit(form);
    expect(mockDashboardService.changePassword).toHaveBeenCalledWith(
      'oldPassword',
      'newPassword'
    );
  });

  it('should show success message when password is changed successfully', () => {
    const form = <NgForm>{
      value: {
        oldpassword: 'oldPassword',
        newpassword: 'newPassword',
      },
    };
    mockDashboardService.changePassword.and.returnValue(of(true));
    component.onSubmit(form);
    expect(mockToastService.showSuccess).toHaveBeenCalledWith(
      'Password Changed Successfully'
    );
  });
});
