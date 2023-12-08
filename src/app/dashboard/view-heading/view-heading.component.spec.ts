import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHeadingComponent } from './view-heading.component';

describe('ViewHeadingComponent', () => {
  let component: ViewHeadingComponent;
  let fixture: ComponentFixture<ViewHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewHeadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
