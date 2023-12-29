import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestsComponent } from './requests.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MessageService } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { DashboardService } from '../../service/dashboard.service';
import { BehaviorSubject, Subject, of, throwError } from 'rxjs';
import { ToastService } from 'src/app/shared/toast.service';

describe('RequestsComponent', () => {
  let component: RequestsComponent;
  let fixture: ComponentFixture<RequestsComponent>;
  let mockMessageService: jasmine.SpyObj<MessageService>;
  let mockDashboardService: jasmine.SpyObj<DashboardService>;
  let mockToastService: jasmine.SpyObj<ToastService>;

  let onHandleRequest$ = new Subject();
  let currentTheme$ = new BehaviorSubject('Light');

  beforeEach(async () => {
    mockMessageService = jasmine.createSpyObj('MessageService', ['add']);
    mockDashboardService = jasmine.createSpyObj('DashboardService', [
      'getAllRequests',
    ]);
    mockToastService = jasmine.createSpyObj('ToastService', ['showError']);
    await TestBed.configureTestingModule({
      declarations: [RequestsComponent],
      imports: [HttpClientTestingModule, FormsModule],
      providers: [
        { provide: MessageService, useValue: mockMessageService },
        { provide: DashboardService, useValue: mockDashboardService },
        { provide: ToastService, useValue: mockToastService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RequestsComponent);
    component = fixture.componentInstance;
    mockDashboardService.onHandleRequest$ = onHandleRequest$;
    mockDashboardService.currentTheme$ = currentTheme$;
  });

  it('should create', () => {
    mockDashboardService.onHandleRequest$.next({});
    mockDashboardService.getAllRequests.and.returnValue(
      of({
        modification_requests: [],
        new_registration_requests: [],
        withdrawn_requests: [],
      })
    );
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should fetch all requests', () => {
    let mockResponse = {
      modification_requests: [],
      new_registration_requests: [],
      withdrawn_requests: [],
    };
    mockDashboardService.getAllRequests.and.returnValue(of(mockResponse));
    component.fetchAllRequests();
    expect(component.modificationRequests).toEqual(
      mockResponse.modification_requests
    );
    expect(component.registrationRequests).toEqual(
      mockResponse.new_registration_requests
    );
    expect(component.withdrawnRequests).toEqual(
      mockResponse.withdrawn_requests
    );
    expect(mockToastService.showError).not.toHaveBeenCalled();
  });

  it('should handle error on fetch all requests', () => {
    mockDashboardService.getAllRequests.and.returnValue(
      throwError({ error: { detail: 'error occured' } })
    );
    component.fetchAllRequests();
    expect(mockToastService.showError).toHaveBeenCalled();
    expect(mockToastService.showError).toHaveBeenCalledWith('error occured');
  });
});
