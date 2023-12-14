import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from './service/login.service';

@Injectable()
export class LoginInterceptor implements HttpInterceptor {
  constructor(private loginService: LoginService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const userDetails = JSON.parse(sessionStorage.getItem('user'));
    if (!userDetails) {
      return next.handle(request);
    }
    const token = userDetails['jwt_token'];
    const headers = request.headers.set('Authorization', `Bearer ${token}`);
    const modifiedRequest = request.clone({ headers });
    return next.handle(modifiedRequest);
  }
}
