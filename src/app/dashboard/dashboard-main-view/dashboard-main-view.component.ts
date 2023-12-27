import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService, UserModel } from 'src/app/login/service/login.service';
import { DashboardService } from '../service/dashboard.service';

@Component({
  selector: 'app-dashboard-main-view',
  templateUrl: './dashboard-main-view.component.html',
  styleUrls: ['./dashboard-main-view.component.scss'],
})
export class DashboardMainViewComponent implements OnInit, OnDestroy {
  user: UserModel;
  userSubscription: Subscription;

  currentTheme: string;
  themeSubscription: Subscription;
  component: { role: string };

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

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
    this.themeSubscription.unsubscribe();
  }
}
