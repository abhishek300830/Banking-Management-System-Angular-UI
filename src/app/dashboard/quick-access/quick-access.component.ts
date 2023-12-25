import { Component, Input } from '@angular/core';
import { QUICK_ACCESS_CONSTANTS } from 'src/app/shared/constants/dashboard-constants';

@Component({
  selector: 'app-quick-access',
  templateUrl: './quick-access.component.html',
  styleUrls: ['./quick-access.component.scss'],
})
export class QuickAccessComponent {
  constants = QUICK_ACCESS_CONSTANTS;
  @Input() currentTheme: String;
}
