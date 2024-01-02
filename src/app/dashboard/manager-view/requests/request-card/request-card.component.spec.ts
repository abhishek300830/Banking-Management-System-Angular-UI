import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestCardComponent } from './request-card.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MessageService } from 'primeng/api';
import { ToastService } from 'src/app/shared/toast.service';
import { DashboardService } from 'src/app/dashboard/service/dashboard.service';

describe('RequestCardComponent', () => {
  let component: RequestCardComponent;
  let fixture: ComponentFixture<RequestCardComponent>;
  let toastService: ToastService;
  let mockDashboardService: jasmine.SpyObj<DashboardService>;
  let mockMessageService: jasmine.SpyObj<MessageService>;

  beforeEach(async () => {
    mockDashboardService = jasmine.createSpyObj('DashboardService', [
      'approveRegistrationRequest',
    ]);
    mockMessageService = jasmine.createSpyObj('MessageService', ['add']);

    await TestBed.configureTestingModule({
      declarations: [RequestCardComponent],
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: DashboardService,
          useValue: mockDashboardService,
        },
        {
          provide: MessageService,
          useValue: mockMessageService,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RequestCardComponent);
    component = fixture.componentInstance;
    toastService = TestBed.inject(ToastService);
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
