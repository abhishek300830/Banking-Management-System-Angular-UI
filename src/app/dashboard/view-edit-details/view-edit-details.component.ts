import { Component } from '@angular/core';

@Component({
  selector: 'app-view-edit-details',
  templateUrl: './view-edit-details.component.html',
  styleUrls: ['./view-edit-details.component.scss'],
})
export class ViewEditDetailsComponent {
  isEditMode: boolean = false;

  changeEditMode(event: boolean) {
    this.isEditMode = event;
  }
}
