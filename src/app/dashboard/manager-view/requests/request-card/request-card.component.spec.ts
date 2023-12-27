import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestCardComponent } from './request-card.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MessageService } from 'primeng/api';

describe('RequestCardComponent', () => {
  let component: RequestCardComponent;
  let fixture: ComponentFixture<RequestCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RequestCardComponent],
      imports: [HttpClientTestingModule],
      providers: [MessageService],
    }).compileComponents();

    fixture = TestBed.createComponent(RequestCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
