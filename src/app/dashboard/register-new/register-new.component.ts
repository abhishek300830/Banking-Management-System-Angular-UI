import { Component } from '@angular/core';
import { DashboardService } from '../service/dashboard.service';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-new',
  templateUrl: './register-new.component.html',
  styleUrls: ['./register-new.component.scss'],
})
export class RegisterNewComponent {
  currentTheme: String;
  themeSubscription: Subscription;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.themeSubscription = this.dashboardService.currentTheme$.subscribe(
      (theme) => {
        this.currentTheme = theme;
      }
    );
  }
  onSubmit(registraitonForm: NgForm) {
    console.log(registraitonForm);
    console.log(registraitonForm.value);
    console.log('Submit');
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
