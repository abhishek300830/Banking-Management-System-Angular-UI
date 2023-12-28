import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestsComponent } from './requests.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MessageService } from 'primeng/api';
import { FormsModule } from '@angular/forms';

describe('RequestsComponent', () => {
  let component: RequestsComponent;
  let fixture: ComponentFixture<RequestsComponent>;
  let mockMessageService: jasmine.SpyObj<MessageService>;

  beforeEach(async () => {
    mockMessageService = jasmine.createSpyObj('MessageService', ['add']);
    await TestBed.configureTestingModule({
      declarations: [RequestsComponent],
      imports: [HttpClientTestingModule, FormsModule],
      providers: [{ provide: MessageService, useValue: mockMessageService }],
    }).compileComponents();

    fixture = TestBed.createComponent(RequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
