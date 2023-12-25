import { Component, Input } from '@angular/core';
import { WIDGETS_CONSTANTS } from 'src/app/shared/constants/dashboard-constants';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss'],
})
export class WidgetsComponent {
  constants = WIDGETS_CONSTANTS;
  @Input() role: string;
  @Input() currentTheme: string;
}
