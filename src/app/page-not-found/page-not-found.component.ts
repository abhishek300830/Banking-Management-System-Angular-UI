import { Component } from '@angular/core';
import { PAGE_NOT_FOUND_CONSTANTS } from 'src/assets/constants/page-not-found-constants';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent {
  constants = PAGE_NOT_FOUND_CONSTANTS;
}
