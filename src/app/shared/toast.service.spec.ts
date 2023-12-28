import { TestBed } from '@angular/core/testing';
import { MessageService } from 'primeng/api';
import { ToastService } from './toast.service';

describe('ToastService', () => {
  let toastService: ToastService;
  let mockMessageService: jasmine.SpyObj<MessageService>;

  beforeEach(() => {
    let mockMessageServiceSpy = jasmine.createSpyObj('MessageService', ['add']);

    TestBed.configureTestingModule({
      providers: [
        ToastService,
        { provide: MessageService, useValue: mockMessageServiceSpy },
      ],
    });

    toastService = TestBed.inject(ToastService);
    mockMessageService = TestBed.inject(
      MessageService
    ) as jasmine.SpyObj<MessageService>;
  });

  it('should show success toast', () => {
    const message = 'Success message';
    toastService.showSuccess(message);

    expect(mockMessageService.add).toHaveBeenCalledWith({
      key: 'tc',
      severity: 'success',
      summary: 'Success',
      detail: message,
    });
  });

  it('should show info toast', () => {
    const message = 'Info message';
    toastService.showInfo(message);

    expect(mockMessageService.add).toHaveBeenCalledWith({
      key: 'tc',
      severity: 'info',
      summary: 'Info',
      detail: message,
    });
  });

  it('should show warn toast', () => {
    const message = 'Warning message';
    toastService.showWarn(message);

    expect(mockMessageService.add).toHaveBeenCalledWith({
      key: 'tc',
      severity: 'warn',
      summary: 'Warn',
      detail: message,
    });
  });

  it('should show error toast', () => {
    const message = 'Error message';
    toastService.showError(message);

    expect(mockMessageService.add).toHaveBeenCalledWith({
      key: 'tc',
      severity: 'error',
      summary: 'An Error Occurred',
      detail: message,
    });
  });
});
