import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferComponent } from './transfer.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MessageService } from 'primeng/api';
import { FormsModule } from '@angular/forms';

describe('TransferComponent', () => {
  let component: TransferComponent;
  let fixture: ComponentFixture<TransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransferComponent],
      imports: [HttpClientTestingModule, FormsModule],
      providers: [MessageService],
    }).compileComponents();

    fixture = TestBed.createComponent(TransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
