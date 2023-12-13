import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-view-customer-details',
  templateUrl: './view-customer-details.component.html',
  styleUrls: ['./view-customer-details.component.scss'],
})
export class ViewCustomerDetailsComponent {
  @Output() isEditMode = new EventEmitter();
  @Input() currentTheme: String;

  @Input() customerDetails: Object;

  changeEditMode() {
    this.isEditMode.emit(true);
  }
}
