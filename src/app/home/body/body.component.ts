import { Component } from '@angular/core';
import { BODY_CONSTANTS } from 'src/app/shared/constants/home-constants';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent {
  bodyConstants = BODY_CONSTANTS;
}
