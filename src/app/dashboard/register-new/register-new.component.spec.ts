import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterNewComponent } from './register-new.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MessageService } from 'primeng/api';
import { FormsModule } from '@angular/forms';

describe('RegisterNewComponent', () => {
  let component: RegisterNewComponent;
  let fixture: ComponentFixture<RegisterNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterNewComponent],
      imports: [HttpClientTestingModule, FormsModule],
      providers: [MessageService],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
