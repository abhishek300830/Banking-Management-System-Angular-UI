import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DashboardService {
  currentTheme$ = new BehaviorSubject('Light');

  constructor(private http: HttpClient) {}

  changePassword(oldPassword: string, newPassword: string) {
    return this.http.put('http://127.0.0.1:8000/changepassword', {
      old_password: oldPassword,
      new_password: newPassword,
    });
  }
}
