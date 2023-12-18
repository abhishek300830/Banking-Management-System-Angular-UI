import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-view-heading',
  templateUrl: './view-heading.component.html',
  styleUrls: ['./view-heading.component.scss'],
})
export class ViewHeadingComponent {
  @Input() title: string;
  @Input() currentTheme: String;
  @Input() role: string = 'notCustomer';
  name: string;
  @Input() accountNumber: number = 1000;

  ngOnInit(): void {
    this.name = JSON.parse(sessionStorage.getItem('user'))['name'];
  }
}
