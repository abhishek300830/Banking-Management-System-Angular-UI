import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-manager-view',
  templateUrl: './manager-view.component.html',
  styleUrls: ['./manager-view.component.scss'],
})
export class ManagerViewComponent {
  @Input() currentTheme: string;
}
