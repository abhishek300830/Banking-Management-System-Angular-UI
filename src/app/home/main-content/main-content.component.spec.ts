import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyComponent } from './main-content.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-our-features',
  template: '<div></div>',
})
class MockOurFeaturesComponent {
  constructor() {}
}

@Component({
  selector: 'app-join-us',
  template: '<div></div>',
})
class MockJoinUsComponent {
  constructor() {}
}

describe('BodyComponent', () => {
  let component: BodyComponent;
  let fixture: ComponentFixture<BodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        BodyComponent,
        MockOurFeaturesComponent,
        MockJoinUsComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
