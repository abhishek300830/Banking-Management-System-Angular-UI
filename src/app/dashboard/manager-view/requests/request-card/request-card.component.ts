import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-request-card',
  templateUrl: './request-card.component.html',
  styleUrls: ['./request-card.component.scss'],
})
export class RequestCardComponent {
  @Input() currentTheme: String;

  @Input() registrationRequest: Object;
  @Input() modificationRequest: Object;
  @Input() withdrawnRequest: Object;
}
