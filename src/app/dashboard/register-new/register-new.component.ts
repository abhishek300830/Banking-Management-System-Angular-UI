import { Component, OnDestroy, OnInit } from '@angular/core';
import { DashboardService } from '../service/dashboard.service';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { ToastService } from 'src/app/shared/toast.service';
import { REGISTER_NEW_CONSTANTS } from 'src/app/shared/constants/dashboard-constants';

@Component({
  selector: 'app-register-new',
  templateUrl: './register-new.component.html',
  styleUrls: ['./register-new.component.scss'],
})
export class RegisterNewComponent implements OnInit, OnDestroy {
  constants = REGISTER_NEW_CONSTANTS;
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
  onSubmit(registraitonForm: NgForm): void {
    if (registraitonForm.invalid) {
      this.toast.showError('Please fill all the details');
      return;
    }
    const {
      email,
      gender,
      idProofType,
      idProofNumber,
      name,
      password,
      phone,
      username,
    } = registraitonForm.value;

    const UserDetailsObject = {
      username: username,
      password: password,
      name: name,
      email: email,
      phone: phone,
      id_proof_type: idProofType,
      id_proof: idProofNumber,
      gender: gender,
    };

    this.dashboardService.registerCustomer(UserDetailsObject).subscribe({
      next: (response) => {
        this.toast.showSuccess(response['details']);
        registraitonForm.reset();
      },
      error: (error) => {
        if (error.status === 400) {
          this.toast.showError(error.error.detail.error.message);
        } else if (error.status === 404) {
          this.toast.showError(error.error['details']);
        } else {
          this.toast.showError('Error in registering new user. Try Again');
        }
      },
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
