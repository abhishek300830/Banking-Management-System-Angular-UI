import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { DashboardService } from '../service/dashboard.service';

@Component({
  selector: 'app-quick-access',
  templateUrl: './quick-access.component.html',
  styleUrls: ['./quick-access.component.scss'],
})
export class QuickAccessComponent {
  @Input() currentTheme: String;
}
