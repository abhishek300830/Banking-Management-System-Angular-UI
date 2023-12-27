import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MessageService } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  template: '',
})
class MockHeaderComponent {
  @Input() loginpage: boolean = false;
  @Input() transparentHeader: boolean = true;
}

@Component({
  selector: 'app-footer',
  template: '',
})
class MockFooterComponent {}

describe('LoginpageComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule],
      providers: [MessageService],
      declarations: [LoginComponent, MockHeaderComponent, MockFooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
