import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss'],
})
export class EditFormComponent {
  customerDetails: string;
  @Output() isEditMode = new EventEmitter();

  @Input() currentTheme: String;

  ngOnInit() {}
  changeEditMode() {
    this.isEditMode.emit(false);
  }

  onSubmit(customerEditForm: NgForm) {
    console.log(customerEditForm.value);
  }
}
