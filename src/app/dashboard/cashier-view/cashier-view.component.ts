import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cashier-view',
  templateUrl: './cashier-view.component.html',
  styleUrls: ['./cashier-view.component.scss'],
})
export class CashierViewComponent {
  @Input() currentTheme: string;
}
