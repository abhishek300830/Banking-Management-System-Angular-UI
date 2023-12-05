import { LoginService } from './service/login.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

// class LoginResponse {
//   jwt_token: string;
//   code: number;
//   details: string;
//   status: string;
// }

@Component({
  selector: 'app-loginpage',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private loginService: LoginService, private router: Router) {}

  onSubmit(form: NgForm) {
    const username = form.value.username;
    const password = form.value.password;
    this.loginService.login(username, password).subscribe({
      next: (response) => {
        const user = this.loginService.setUserModel(response['jwt_token']);
        this.loginService.currentUser$.next(user);
        console.log('redirected');
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        console.log('response', error);
        this.router.navigate(['/login']);
      },
    });
  }

  onfetchBalance() {
    this.loginService.fetchBalance();
  }
}
