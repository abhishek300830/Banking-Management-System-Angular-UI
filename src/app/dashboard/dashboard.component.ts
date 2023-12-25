import { Component, OnInit, OnDestroy } from '@angular/core';
import { DashboardService } from './service/dashboard.service';
import { Subscription } from 'rxjs';
import { LoginService, UserModel } from '../login/service/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  currentTheme: string;
  themeSubscription: Subscription;

  user: UserModel;
  userSubscription: Subscription;

  isDashboardRoute: boolean = false;

  constructor(
    private dashboardService: DashboardService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.themeSubscription = this.dashboardService.currentTheme$.subscribe(
      (theme) => {
        this.currentTheme = theme;
      }
    );
    this.userSubscription = this.loginService.currentUser$.subscribe((user) => {
      this.user = user;
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe;
  }
}
