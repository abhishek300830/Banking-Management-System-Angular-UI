import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DashboardService } from '../../service/dashboard.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-view-customer-details',
  templateUrl: './view-customer-details.component.html',
  styleUrls: ['./view-customer-details.component.scss'],
})
export class ViewCustomerDetailsComponent {
  @Output() isEditMode = new EventEmitter();
  @Input() currentTheme: String;

  changeEditMode() {
    this.isEditMode.emit(true);
  }
}
