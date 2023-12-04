import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  loginpage = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const routePath = this.route.snapshot?.url[0]?.path;
    if (routePath === 'login') {
      this.loginpage = true;
    }
  }
}
