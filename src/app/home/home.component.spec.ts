import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';

import { HomeComponent } from './home.component';

describe('HomepageComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  @Component({
    selector: 'app-header',
    template: '<div></div>',
  })
  class MockHeaderComponent {
    constructor() {}
  }

  @Component({
    selector: 'app-main-content',
    template: '<div></div>',
  })
  class MockMainContentComponent {
    constructor() {}
  }

  @Component({
    selector: 'app-footer',
    template: '<div></div>',
  })
  class MockFooterComponent {
    constructor() {}
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        MockHeaderComponent,
        MockMainContentComponent,
        MockFooterComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
