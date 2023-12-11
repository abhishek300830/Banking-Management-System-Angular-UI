import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss'],
})
export class CustomerViewComponent {
  @Input() currentTheme: string;
}
