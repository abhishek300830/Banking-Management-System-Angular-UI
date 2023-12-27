import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';

import { CashierViewComponent } from './cashier-view.component';
@Component({
  selector: 'app-view-heading',
  template: '',
})
class MockViewHeadingComponent {
  @Input() currentTheme: string;
}

@Component({
  selector: 'app-widgets',
  template: '',
})
class MockWidgetsComponent {
  @Input() currentTheme: string;
}

@Component({
  selector: 'app-quick-access',
  template: '',
})
class MockQuickAccessComponent {
  @Input() currentTheme: string;
}

@Component({
  selector: 'app-transfer',
  template: '',
})
class MockTransferComponent {
  @Input() currentTheme: string;
}

describe('CashierViewComponent', () => {
  let component: CashierViewComponent;
  let fixture: ComponentFixture<CashierViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CashierViewComponent,
        MockViewHeadingComponent,
        MockWidgetsComponent,
        MockQuickAccessComponent,
        MockTransferComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CashierViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
