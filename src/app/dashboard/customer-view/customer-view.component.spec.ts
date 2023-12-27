import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerViewComponent } from './customer-view.component';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-view-heading',
  template: '',
})
class MockViewHeadingComponent {
  @Input() currentTheme: string;
  @Input() role: string = 'notCustomer';
  @Input() accountNumber: number;
}

@Component({
  selector: 'app-account-detail',
  template: '',
})
class MockAccountDetailComponent {
  @Input() currentTheme: string;
}

@Component({
  selector: 'app-quick-transfer',
  template: '',
})
class MockQuickTransferComponent {
  @Input() currentTheme: string;
}

describe('CustomerViewComponent', () => {
  let component: CustomerViewComponent;
  let fixture: ComponentFixture<CustomerViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CustomerViewComponent,
        MockViewHeadingComponent,
        MockAccountDetailComponent,
        MockQuickTransferComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
