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
import { OurFeaturesComponent } from './home/body/our-features/our-features.component';
import { JoinUsComponent } from './home/body/join-us/join-us.component';
import { ViewHeadingComponent } from './dashboard/view-heading/view-heading.component';
import { TransferComponent } from './dashboard/transfer/transfer.component';
import { QuickAccessComponent } from './dashboard/quick-access/quick-access.component';
import { RequestsComponent } from './dashboard/manager-view/requests/requests.component';
import { QuickTransferComponent } from './dashboard/customer-view/quick-transfer/quick-transfer.component';
import { TransactionComponent } from './dashboard/transaction/transaction.component';
import { DashboardMainViewComponent } from './dashboard/dashboard-main-view/dashboard-main-view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditFormComponent } from './dashboard/view-edit-details/edit-form/edit-form.component';
import { ViewCustomerDetailsComponent } from './dashboard/view-edit-details/view-customer-details/view-customer-details.component';
import { RequestCardComponent } from './dashboard/manager-view/requests/request-card/request-card.component';
import { WidgetsComponent } from './dashboard/widgets/widgets.component';

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
    OurFeaturesComponent,
    JoinUsComponent,
    ViewHeadingComponent,
    TransferComponent,
    QuickAccessComponent,
    RequestsComponent,
    QuickTransferComponent,
    TransactionComponent,
    DashboardMainViewComponent,
    PageNotFoundComponent,
    EditFormComponent,
    ViewCustomerDetailsComponent,
    RequestCardComponent,
    WidgetsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoginInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
