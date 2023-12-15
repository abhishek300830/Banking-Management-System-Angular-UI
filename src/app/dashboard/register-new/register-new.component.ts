import { Component } from '@angular/core';
import { DashboardService } from '../service/dashboard.service';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { ToastService } from 'src/app/shared/toast.service';

@Component({
  selector: 'app-register-new',
  templateUrl: './register-new.component.html',
  styleUrls: ['./register-new.component.scss'],
})
export class RegisterNewComponent {
  currentTheme: String;
  themeSubscription: Subscription;

  constructor(
    private dashboardService: DashboardService,
    private toast: ToastService
  ) {}

  ngOnInit() {
    this.themeSubscription = this.dashboardService.currentTheme$.subscribe(
      (theme) => {
        this.currentTheme = theme;
      }
    );
  }
  onSubmit(registraitonForm: NgForm) {
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
        console.log(response);
        this.toast.showSuccess(response['details']);
      },
      error: (error) => {
        this.toast.showError('Error in registering new user. Try Again');
        console.log(error);
      },
    });
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
