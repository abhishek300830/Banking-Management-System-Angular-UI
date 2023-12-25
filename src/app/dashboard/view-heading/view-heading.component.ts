import { Component, Input, OnInit } from '@angular/core';
import { VIEW_HEADING_CONSTANTS } from 'src/app/shared/constants/dashboard-constants';

@Component({
  selector: 'app-view-heading',
  templateUrl: './view-heading.component.html',
  styleUrls: ['./view-heading.component.scss'],
})
export class ViewHeadingComponent implements OnInit {
  constants = VIEW_HEADING_CONSTANTS;
  @Input() title: string;
  @Input() currentTheme: string;
  @Input() role: string = 'notCustomer';
  name: string;
  @Input() accountNumber: number = 1000;

  ngOnInit(): void {
    this.name = JSON.parse(sessionStorage.getItem('user'))['name'];
  }
}
