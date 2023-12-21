import { DashboardService } from './../../service/dashboard.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/shared/toast.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss'],
})
export class EditFormComponent {
  customerDetails: string;
  @Output() isEditMode = new EventEmitter();

  @Input() currentTheme: string;
  @Input() accountNumber: number;

  constructor(
    private dashboardService: DashboardService,
    private router: Router,
    private toast: ToastService
  ) {}

  ngOnInit() {}
  changeEditMode() {
    this.isEditMode.emit(false);
  }

  onSubmit(customerEditForm: NgForm) {
    const attribute_name = customerEditForm.value['customer-detail'];
    const attribute_value = customerEditForm.value[attribute_name];

    console.log(this.accountNumber, attribute_name, attribute_value);

    this.dashboardService
      .modifyCustomerDetails(
        this.accountNumber,
        attribute_name,
        attribute_value
      )
      .subscribe({
        next: (response) => {
          this.toast.showSuccess(response['details']);
        },
        error: (error) => {
          if (error.status === 403) {
            this.toast.showError('Please login again');
            this.router.navigate(['/login']);
          } else {
            this.toast.showError("Error in updating customer's details");
            console.log(error);
          }
        },
      });
  }
}
