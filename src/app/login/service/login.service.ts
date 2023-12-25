import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  baseUrl = 'http://127.0.0.1:8000';
  currentUser$ = new BehaviorSubject(null);

  user = new UserModel();

  constructor(private http: HttpClient) {
    const userDetails = sessionStorage.getItem('user');
    if (userDetails) {
      this.currentUser$.next(JSON.parse(userDetails));
    }
  }

  login(username: string, password: string) {
    return this.http.post(`${this.baseUrl}/login`, {
      username,
      password,
    });
  }

  setUserModel(jwt_token: string) {
    const decoded = jwtDecode(jwt_token);

    this.user.role = decoded['role'];
    this.user.jwt_token = jwt_token;
    this.user.username = decoded.sub;
    this.user.name = decoded['name'];

    return this.user;
  }
}

interface userDetail {
  jwt_token: string;
  username: string;
  role: string;
  name: string;
}

export class UserModel implements userDetail {
  public jwt_token: string;
  public username: string;
  public role: string;
  public name: string;
}
