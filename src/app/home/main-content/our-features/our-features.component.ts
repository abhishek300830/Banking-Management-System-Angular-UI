import { Component } from '@angular/core';
import { OUR_FEATURES_CONSTANTS } from 'src/app/shared/constants/home-constants';

@Component({
  selector: 'app-our-features',
  templateUrl: './our-features.component.html',
  styleUrls: ['./our-features.component.scss'],
})
export class OurFeaturesComponent {
  ourFeaturesConstants = OUR_FEATURES_CONSTANTS;
}
