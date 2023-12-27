import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerViewComponent } from './manager-view.component';
import { Component, Input } from '@angular/core';

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
  @Input() role: string;
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
class MockTranferComponent {
  @Input() currentTheme: string;
}

describe('ManagerViewComponent', () => {
  let component: ManagerViewComponent;
  let fixture: ComponentFixture<ManagerViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ManagerViewComponent,
        MockViewHeadingComponent,
        MockWidgetsComponent,
        MockQuickAccessComponent,
        MockTranferComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ManagerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
