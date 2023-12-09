import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  currentUser$ = new BehaviorSubject(null);

  user = new UserModel();

  constructor(private http: HttpClient) {
    const userDetails = sessionStorage.getItem('user');
    if (userDetails) {
      this.currentUser$.next(JSON.parse(userDetails));
    }
  }

  login(username: string, password: string) {
    return this.http.post('http://127.0.0.1:8000/login', {
      username,
      password,
    });
  }

  setUserModel(jwt_token: string) {
    const decoded = jwtDecode(jwt_token);

    this.user.role = decoded['role'];
    this.user.jwt_token = jwt_token;
    this.user.username = decoded.sub;

    return this.user;
  }
}

interface userDetail {
  jwt_token: string;
  username: string;
  role: string;
}

export class UserModel implements userDetail {
  public jwt_token: string;
  public username: string;
  public role: string;
}
