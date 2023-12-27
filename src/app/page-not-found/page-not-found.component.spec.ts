import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFoundComponent } from './page-not-found.component';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  template: '',
})
class MockHeaderComponent {
  @Input() transparentHeader: boolean = true;
}

@Component({
  selector: 'app-footer',
  template: '',
})
class MockFooterComponent {}

describe('PageNotFoundComponent', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        PageNotFoundComponent,
        MockHeaderComponent,
        MockFooterComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
