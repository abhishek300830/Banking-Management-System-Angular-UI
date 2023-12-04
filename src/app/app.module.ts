import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HomeFooterComponent } from './homepage/home-footer/home-footer.component';
import { HomeBodyComponent } from './homepage/home-body/home-body.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { ManagerViewComponent } from './dashboard/manager-view/manager-view.component';
import { CustomerViewComponent } from './dashboard/customer-view/customer-view.component';
import { CashierViewComponent } from './dashboard/cashier-view/cashier-view.component';
import { SharedModule } from './shared/shared.module';
import { DashboardHeaderComponent } from './dashboard/dashboard-header/dashboard-header.component';
import { FormsModule } from '@angular/forms';
import { LoginInterceptor } from './loginpage/login.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HomeFooterComponent,
    HomeBodyComponent,
    LoginpageComponent,
    DashboardComponent,
    SidebarComponent,
    ManagerViewComponent,
    CustomerViewComponent,
    CashierViewComponent,
    DashboardHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoginInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
