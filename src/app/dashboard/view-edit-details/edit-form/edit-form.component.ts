import { Component, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { DashboardService } from '../../service/dashboard.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss'],
})
export class EditFormComponent {
  customerDetails: string = 'name';
  @Output() isEditMode = new EventEmitter();

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
  changeEditMode() {
    this.isEditMode.emit(false);
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
