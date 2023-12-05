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
    const token = this.loginService.user.jwt_token;
    console.log('interceptor');
    if (!token) {
      return next.handle(request);
    }
    const headers = request.headers.set('Authorization', `Bearer ${token}`);
    const modifiedRequest = request.clone({ headers });
    return next.handle(modifiedRequest);
  }
}
