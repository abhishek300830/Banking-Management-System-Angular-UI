import { Component } from '@angular/core';
import { SHARED_CONSTANTS } from 'src/app/shared/constants/shared-constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  constants = SHARED_CONSTANTS;
}
