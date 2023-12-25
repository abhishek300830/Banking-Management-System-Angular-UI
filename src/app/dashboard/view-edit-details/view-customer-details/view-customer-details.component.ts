import { Component, EventEmitter, Input, Output } from '@angular/core';
import { VIEW_CUSTOMER_DETAILS_CONSTANTS } from 'src/app/shared/constants/dashboard-constants';

@Component({
  selector: 'app-view-customer-details',
  templateUrl: './view-customer-details.component.html',
  styleUrls: ['./view-customer-details.component.scss'],
})
export class ViewCustomerDetailsComponent {
  constants = VIEW_CUSTOMER_DETAILS_CONSTANTS;
  @Output() isEditMode = new EventEmitter();
  @Input() currentTheme: string;

  @Input() customerDetails: {};

  changeEditMode(): void {
    this.isEditMode.emit(true);
  }
}
