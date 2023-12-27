import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMainViewComponent } from './dashboard-main-view.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserModel } from 'src/app/login/service/login.service';

describe('DashboardMainViewComponent', () => {
  let component: DashboardMainViewComponent;
  let fixture: ComponentFixture<DashboardMainViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardMainViewComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardMainViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
