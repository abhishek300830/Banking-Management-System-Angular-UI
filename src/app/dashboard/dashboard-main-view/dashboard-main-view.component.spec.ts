import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMainViewComponent } from './dashboard-main-view.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DashboardService } from '../service/dashboard.service';
import { LoginService, UserModel } from 'src/app/login/service/login.service';
import { MessageService } from 'primeng/api';
import { BehaviorSubject } from 'rxjs';
import { Component, Input } from '@angular/core';

let mockCurrentUser = new BehaviorSubject<UserModel>({
  jwt_token: 'test',
  role: 'Manager',
  username: 'test',
  name: 'test',
});

let mockCurrentTheme = new BehaviorSubject<string>('Light');

@Component({
  selector: 'app-manager-view',
  template: '',
})
export class MockManagerViewComponent {
  @Input() currentTheme: string;
}

@Component({
  selector: 'app-customer-view',
  template: '',
})
export class MockCustomerViewComponent {
  @Input() currentTheme: string;
}

@Component({
  selector: 'app-cashier-view',
  template: '',
})
export class MockCashierViewComponent {
  @Input() currentTheme: string;
}

describe('DashboardMainViewComponent', () => {
  let component: DashboardMainViewComponent;
  let fixture: ComponentFixture<DashboardMainViewComponent>;
  let mockLoginService: jasmine.SpyObj<LoginService>;
  let mockDashboardService: jasmine.SpyObj<DashboardService>;

  beforeEach(async () => {
    mockLoginService = jasmine.createSpyObj('LoginService', [
      'mockCurrentUser',
    ]);

    mockDashboardService = jasmine.createSpyObj('DashboardService', [
      'mockCurrentTheme',
    ]);

    await TestBed.configureTestingModule({
      declarations: [
        DashboardMainViewComponent,
        MockManagerViewComponent,
        MockCustomerViewComponent,
        MockCashierViewComponent,
      ],
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: LoginService,
          useValue: mockLoginService,
        },
        {
          provide: DashboardService,
          useValue: mockDashboardService,
        },
        MessageService,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardMainViewComponent);
    component = fixture.componentInstance;
    mockLoginService.currentUser$ = mockCurrentUser;
    mockDashboardService.currentTheme$ = mockCurrentTheme;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
