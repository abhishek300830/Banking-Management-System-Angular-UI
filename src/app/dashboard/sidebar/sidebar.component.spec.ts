import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarComponent } from './sidebar.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MessageService } from 'primeng/api';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginService, UserModel } from 'src/app/login/service/login.service';
import { BehaviorSubject } from 'rxjs';
import { DashboardService } from '../service/dashboard.service';

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

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
