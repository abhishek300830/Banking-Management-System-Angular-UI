import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { LoginService, UserModel } from 'src/app/login/service/login.service';
import { DashboardService } from '../service/dashboard.service';

@Component({
  selector: 'app-dashboard-main-view',
  templateUrl: './dashboard-main-view.component.html',
  styleUrls: ['./dashboard-main-view.component.scss'],
})
export class DashboardMainViewComponent implements OnInit {
  user: UserModel;
  userSubscription: Subscription;

  currentTheme: string;
  themeSubscription: Subscription;

  constructor(
    private loginService: LoginService,
    private dashboardService: DashboardService
  ) {}

  ngOnInit(): void {
    this.userSubscription = this.loginService.currentUser$.subscribe((user) => {
      this.user = user;
    });
    this.themeSubscription = this.dashboardService.currentTheme$.subscribe(
      (theme) => {
        this.currentTheme = theme;
      }
    );
  }
}
