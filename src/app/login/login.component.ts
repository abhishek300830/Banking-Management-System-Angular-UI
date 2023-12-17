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
  hide: boolean = true;

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
        if (error.status === 401) {
          this.toast.showError('Invalid Username or Password');
          this.router.navigate(['/login']);
          return;
        } else {
          this.toast.showError('Internal Server Error');
          this.router.navigate(['/login']);
          return;
        }
      },
    });
  }
}
