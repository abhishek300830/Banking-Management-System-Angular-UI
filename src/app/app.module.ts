import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { LoginInterceptor } from './login/login.interceptor';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './home/body/body.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChangePasswordComponent } from './dashboard/change-password/change-password.component';
import { CashierViewComponent } from './dashboard/cashier-view/cashier-view.component';
import { CustomerViewComponent } from './dashboard/customer-view/customer-view.component';
import { DashboardHeaderComponent } from './dashboard/dashboard-header/dashboard-header.component';
import { RegisterNewComponent } from './dashboard/register-new/register-new.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { ManagerViewComponent } from './dashboard/manager-view/manager-view.component';
import { ViewEditDetailsComponent } from './dashboard/view-edit-details/view-edit-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    DashboardComponent,
    ChangePasswordComponent,
    CashierViewComponent,
    CustomerViewComponent,
    DashboardHeaderComponent,
    RegisterNewComponent,
    SidebarComponent,
    ManagerViewComponent,
    ViewEditDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoginInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
