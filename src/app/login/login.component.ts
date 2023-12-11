import { LoginService } from './service/login.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from '../shared/toast.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private loginService: LoginService,
    private router: Router,
    private toast: ToastService
  ) {}

  onSubmit(form: NgForm) {
    const username = form.value.username;
    const password = form.value.password;

    this.loginService.login(username, password).subscribe({
      next: (response) => {
        this.toast.showSuccess('Login Successfully');
        const user = this.loginService.setUserModel(response['jwt_token']);
        this.loginService.currentUser$.next(user);
        sessionStorage.setItem('user', JSON.stringify(user));
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        this.toast.showError(error.error.detail.error.message);
        console.log('response', error);
        this.router.navigate(['/login']);
      },
    });
  }
}
