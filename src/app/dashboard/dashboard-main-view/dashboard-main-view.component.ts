import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { LoginService, UserModel } from 'src/app/login/service/login.service';

@Component({
  selector: 'app-dashboard-main-view',
  templateUrl: './dashboard-main-view.component.html',
  styleUrls: ['./dashboard-main-view.component.scss'],
})
export class DashboardMainViewComponent implements OnInit {
  user: UserModel;
  userSubscription: Subscription;

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.userSubscription = this.loginService.currentUser$.subscribe((user) => {
      this.user = user;
    });
  }
}
