import { Component, Input } from '@angular/core';
import { SHARED_CONSTANTS } from 'src/app/shared/constants/shared-constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constants = SHARED_CONSTANTS;
  @Input() loginpage = false;
  @Input() transparentHeader = true;
}
