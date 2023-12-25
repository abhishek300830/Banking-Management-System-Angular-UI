import { Component } from '@angular/core';
import { HOME_CONSTANTS } from 'src/app/shared/constants/home-constants';

@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.scss'],
})
export class JoinUsComponent {
  homeConstants = HOME_CONSTANTS;
}
