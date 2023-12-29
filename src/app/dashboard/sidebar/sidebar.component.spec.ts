import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarComponent } from './sidebar.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MessageService } from 'primeng/api';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginService, UserModel } from 'src/app/login/service/login.service';
import { BehaviorSubject } from 'rxjs';
import { DashboardService } from '../service/dashboard.service';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/shared/toast.service';

let mockCurrentUser = new BehaviorSubject<UserModel>({
  jwt_token: 'test',
  role: 'Manager',
  username: 'test',
  name: 'test',
});

let mockCurrentTheme = new BehaviorSubject<string>('Light');

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;
  let mockMessageService: jasmine.SpyObj<MessageService>;
  let mockLoginService: jasmine.SpyObj<LoginService>;
  let mockDashboardService: jasmine.SpyObj<DashboardService>;
  let router: Router;
  let toastService: ToastService;

  beforeEach(async () => {
    mockMessageService = jasmine.createSpyObj('MessageService', ['add']);
    mockLoginService = jasmine.createSpyObj('LoginService', [
      'mockCurrentUser',
    ]);
    mockDashboardService = jasmine.createSpyObj('DashboardService', [
      'mockCurrentTheme',
    ]);
    await TestBed.configureTestingModule({
      declarations: [SidebarComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        { provide: MessageService, useValue: mockMessageService },
        { provide: LoginService, useValue: mockLoginService },
        { provide: DashboardService, useValue: mockDashboardService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    mockLoginService.currentUser$ = mockCurrentUser;
    mockDashboardService.currentTheme$ = mockCurrentTheme;

    router = TestBed.inject(Router);
    toastService = TestBed.inject(ToastService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get class when current theme is Light', () => {
    mockDashboardService.currentTheme$.next('Light');
    expect(component.getClass()).toEqual('active_light');
  });

  it('should get class when current theme is Dark', () => {
    mockDashboardService.currentTheme$.next('Dark');
    expect(component.getClass()).toEqual('active_dark');
  });

  it('should logout successfully', () => {
    spyOn(mockLoginService.currentUser$, 'next');
    spyOn(sessionStorage, 'clear');
    spyOn(toastService, 'showSuccess');
    spyOn(router, 'navigate');

    component.onLogout();

    expect(mockLoginService.currentUser$.next).toHaveBeenCalledWith(null);
    expect(sessionStorage.clear).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['/login']);
    expect(toastService.showSuccess).toHaveBeenCalledWith(
      'Logout Successfully.'
    );
  });
});
