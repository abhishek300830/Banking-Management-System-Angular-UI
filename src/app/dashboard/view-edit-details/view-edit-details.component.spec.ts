import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEditDetailsComponent } from './view-edit-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MessageService } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-edit-form',
  template: '',
})
export class MockEditFormComponent {
  @Input() currentTheme: string;
}

@Component({
  selector: 'app-view-customer-details',
  template: '',
})
export class MockViewCustomerDetailsComponent {
  @Input() currentTheme: string;
  @Input() customerDetails: {};
}

describe('ViewEditDetailsComponent', () => {
  let component: ViewEditDetailsComponent;
  let fixture: ComponentFixture<ViewEditDetailsComponent>;
  let mockMessageService: jasmine.SpyObj<MessageService>;

  beforeEach(async () => {
    mockMessageService = jasmine.createSpyObj('MessageService', ['add']);
    await TestBed.configureTestingModule({
      declarations: [
        ViewEditDetailsComponent,
        MockEditFormComponent,
        MockViewCustomerDetailsComponent,
      ],
      imports: [HttpClientTestingModule, FormsModule],
      providers: [{ provide: MessageService, useValue: mockMessageService }],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewEditDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set isEditMode to true', () => {
    component.changeEditMode(true);
    expect(component.isEditMode).toBeTrue();
  });

  it('should set isEditMode to false', () => {
    component.changeEditMode(false);
    expect(component.isEditMode).toBeFalse();
  });
});
