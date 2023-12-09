import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { DashboardService } from '../service/dashboard.service';
import { Subscription } from 'rxjs';
import { LoginService, UserModel } from 'src/app/login/service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, OnDestroy {
  currentTheme: String;
  themeSubscription: Subscription;
  userSubscription: Subscription;
  user: UserModel;

  constructor(
    private dashboardService: DashboardService,
    private loginService: LoginService,
    private elementRef: ElementRef,
    private router: Router
  ) {}

  ngOnInit() {
    this.themeSubscription = this.dashboardService.currentTheme$.subscribe(
      (theme) => {
        this.currentTheme = theme;
      }
    );
    this.userSubscription = this.loginService.currentUser$.subscribe((user) => {
      this.user = user;
    });
  }

  changeTheme() {
    if (this.currentTheme === 'Light') {
      this.dashboardService.currentTheme$.next('Dark');
      this.elementRef.nativeElement.style.setProperty(
        '--text-color',
        '#16171B'
      );
    } else {
      this.dashboardService.currentTheme$.next('Light');
      this.elementRef.nativeElement.style.setProperty(
        '--text-color',
        '#F8FBFF'
      );
    }
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
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
