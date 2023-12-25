import { Component, ElementRef, OnInit } from '@angular/core';
import { DashboardService } from '../service/dashboard.service';
import { Subscription } from 'rxjs';
import { LoginService, UserModel } from 'src/app/login/service/login.service';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/shared/toast.service';
import { SIDEBAR_CONSTANTS } from 'src/app/shared/constants/dashboard-constants';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constants = SIDEBAR_CONSTANTS;
  currentTheme: String;

  userSubscription: Subscription;
  user: UserModel;

  constructor(
    private dashboardService: DashboardService,
    private loginService: LoginService,
    private elementRef: ElementRef,
    private router: Router,
    private toast: ToastService
  ) {}

  ngOnInit() {
    this.userSubscription = this.loginService.currentUser$.subscribe((user) => {
      this.user = user;
    });

    this.dashboardService.currentTheme$.subscribe((theme) => {
      this.currentTheme = theme;
      if (this.currentTheme === 'Dark') {
        this.elementRef.nativeElement.style.setProperty(
          '--text-color',
          '#16171B'
        );
      } else {
        this.elementRef.nativeElement.style.setProperty(
          '--text-color',
          '#F8FBFF'
        );
      }
    });
  }

  getClass() {
    if (this.currentTheme === 'Light') {
      return 'active_light';
    } else {
      return 'active_dark';
    }
  }

  onLogout() {
    this.loginService.currentUser$.next(null);
    sessionStorage.clear();
    this.router.navigate(['/login']);
    this.toast.showSuccess('Logout Successfully.');
  }
}
