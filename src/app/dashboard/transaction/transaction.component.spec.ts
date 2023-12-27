import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionComponent } from './transaction.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MessageService } from 'primeng/api';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

describe('TransactionComponent', () => {
  let component: TransactionComponent;
  let fixture: ComponentFixture<TransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransactionComponent],
      imports: [
        HttpClientTestingModule,
        CalendarModule,
        FormsModule,
        NgxPaginationModule,
      ],
      providers: [MessageService],
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
