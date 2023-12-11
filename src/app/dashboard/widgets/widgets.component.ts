import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss'],
})
export class WidgetsComponent {
  isMorning: boolean = true;
  @Input() currentTheme: string;
}
