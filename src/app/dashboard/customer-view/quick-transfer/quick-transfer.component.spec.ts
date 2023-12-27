import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickTransferComponent } from './quick-transfer.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MessageService } from 'primeng/api';
import { FormsModule } from '@angular/forms';

describe('QuickTransferComponent', () => {
  let component: QuickTransferComponent;
  let fixture: ComponentFixture<QuickTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuickTransferComponent],
      imports: [HttpClientTestingModule, FormsModule],
      providers: [MessageService],
    }).compileComponents();

    fixture = TestBed.createComponent(QuickTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
