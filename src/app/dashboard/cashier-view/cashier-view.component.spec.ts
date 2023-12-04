import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashierViewComponent } from './cashier-view.component';

describe('CashierViewComponent', () => {
  let component: CashierViewComponent;
  let fixture: ComponentFixture<CashierViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashierViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashierViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
