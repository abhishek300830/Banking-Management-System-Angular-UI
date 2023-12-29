import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCustomerDetailsComponent } from './view-customer-details.component';

describe('ViewCustomerDetailsComponent', () => {
  let component: ViewCustomerDetailsComponent;
  let fixture: ComponentFixture<ViewCustomerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewCustomerDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewCustomerDetailsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should emit if changeEditMode is called`, () => {
    spyOn(component.isEditMode, 'emit');
    component.changeEditMode();
    expect(component.isEditMode.emit).toHaveBeenCalledWith(true);
  });
});
