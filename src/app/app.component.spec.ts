import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

describe('AppComponent', () => {
  let MockMessageService: jasmine.SpyObj<MessageService>;

  beforeEach(async () => {
    MockMessageService = jasmine.createSpyObj('MessageService', ['add']);
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, ToastModule],
      declarations: [AppComponent],
      providers: [
        {
          provide: MessageService,
          useValue: MockMessageService,
        },
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
