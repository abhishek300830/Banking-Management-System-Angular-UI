import { NgForm } from '@angular/forms';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DashboardService } from '../service/dashboard.service';
import { ToastService } from 'src/app/shared/toast.service';
import { CHANGE_PASSWORD_CONSTANTS } from 'src/app/shared/constants/dashboard-constants';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit, OnDestroy {
  constants = CHANGE_PASSWORD_CONSTANTS;
  currentTheme: string;
  themeSubscription: Subscription;

  constructor(
    private dashboardService: DashboardService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.themeSubscription = this.dashboardService.currentTheme$.subscribe(
      (theme) => {
        this.currentTheme = theme;
      }
    );
  }

  onSubmit(changePasswordForm: NgForm): void {
    const oldpassword = changePasswordForm.value.oldpassword;
    const newpassword = changePasswordForm.value.newpassword;
    this.dashboardService.changePassword(oldpassword, newpassword).subscribe({
      next: (response) => {
        if (response) {
          this.toast.showSuccess('Password Changed Successfully');
        }
      },
      error: (error) => {
        if (error.status === 404) {
          this.toast.showError(
            'Include Uppercase, Lowercase letters, numbers and special characters in your password. '
          );
        } else if (error.status === 401) {
          this.toast.showError('Old password is incorrect.');
        }
      },
    });
  }

  ngOnDestroy(): void {
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
  }
}
