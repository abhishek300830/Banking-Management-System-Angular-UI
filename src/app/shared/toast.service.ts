import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({ providedIn: 'root' })
export class ToastService {
  constructor(private messageService: MessageService) {}

  showSuccess(message: string) {
    this.messageService.add({
      key: 'tc',
      severity: 'success',
      summary: 'Success',
      detail: message,
    });
  }

  showInfo(message: string) {
    this.messageService.add({
      key: 'tc',
      severity: 'info',
      summary: 'Info',
      detail: message,
    });
  }

  showWarn(message: string) {
    this.messageService.add({
      key: 'tc',
      severity: 'warn',
      summary: 'Warn',
      detail: message,
    });
  }

  showError(message: string) {
    this.messageService.add({
      key: 'tc',
      severity: 'error',
      summary: 'An Error Occurred',
      detail: message,
    });
  }
}
