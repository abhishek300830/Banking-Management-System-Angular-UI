import { Component } from '@angular/core';
import { BODY_CONSTANTS } from 'src/app/shared/constants/home-constants';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
})
export class BodyComponent {
  bodyConstants = BODY_CONSTANTS;
}
