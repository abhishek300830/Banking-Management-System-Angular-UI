import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { LoginService } from './login.service';
import { HttpClient } from '@angular/common/http';

describe('LoginService', () => {
  let service: LoginService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LoginService],
    });
    service = TestBed.inject(LoginService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set currentUser$ if user details ', () => {
    const userDetails = JSON.stringify({ username: 'testuser', role: 'admin' });
    sessionStorage.setItem('user', userDetails);

    service = new LoginService(TestBed.inject(HttpClient));

    service.currentUser$.subscribe((user) => {
      expect(user).toEqual(JSON.parse(userDetails));
    });
  });

  it('should not set currentUser$ if not user details', () => {
    sessionStorage.removeItem('user');

    service = new LoginService(TestBed.inject(HttpClient));

    service.currentUser$.subscribe((user) => {
      expect(user).toBeNull();
    });
  });

  it('should send a POST request to login', () => {
    const username = 'testuser';
    const password = 'testpassword';

    service.login(username, password).subscribe();

    const req = httpMock.expectOne(`${service.baseUrl}/login`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({ username, password });

    req.flush({});
  });

  it('should set the user model', () => {
    const jwtToken =
      'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwicm9sZSI6Ik1hbmFnZXIiLCJuYW1lIjoiYWJoaXNoZWsifQ.5Jog7S5ESg6gq4fkX2-6xI6tG1W8qmhFigmwNVbo_ME';
    const decodedToken = {
      role: 'Manager',
      sub: '1',
      name: 'abhishek',
    };
    service.setUserModel(jwtToken);

    expect(service.user.role).toBe(decodedToken.role);
    expect(service.user.jwt_token).toBe(jwtToken);
    expect(service.user.username).toBe(decodedToken.sub);
    expect(service.user.name).toBe(decodedToken.name);
  });
});
