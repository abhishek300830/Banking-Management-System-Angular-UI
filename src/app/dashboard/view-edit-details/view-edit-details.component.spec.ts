import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEditDetailsComponent } from './view-edit-details.component';

describe('ViewEditDetailsComponent', () => {
  let component: ViewEditDetailsComponent;
  let fixture: ComponentFixture<ViewEditDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEditDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEditDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
