import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss'],
})
export class EditFormComponent {
  customerDetails: string = 'name';
  @Output() isEditMode = new EventEmitter();

  @Input() currentTheme: String;

  ngOnInit() {}
  changeEditMode() {
    this.isEditMode.emit(false);
  }
}
