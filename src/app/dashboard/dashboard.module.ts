import { NgModule } from '@angular/core';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { DashboardMainViewComponent } from './dashboard-main-view/dashboard-main-view.component';
import { RequestsComponent } from './manager-view/requests/requests.component';
import { RegisterNewComponent } from './register-new/register-new.component';
import { TransactionComponent } from './transaction/transaction.component';
import { ViewEditDetailsComponent } from './view-edit-details/view-edit-details.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { ToastModule } from 'primeng/toast';
import { AppRoutingModule } from '../app-routing.module';
import { ViewCustomerDetailsComponent } from './view-edit-details/view-customer-details/view-customer-details.component';
import { EditFormComponent } from './view-edit-details/edit-form/edit-form.component';
import { ManagerViewComponent } from './manager-view/manager-view.component';
import { CashierViewComponent } from './cashier-view/cashier-view.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { RequestCardComponent } from './manager-view/requests/request-card/request-card.component';
import { ViewHeadingComponent } from './view-heading/view-heading.component';
import { TransferComponent } from './transfer/transfer.component';
import { QuickAccessComponent } from './quick-access/quick-access.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { AccountDetailComponent } from './customer-view/account-detail/account-detail.component';
import { QuickTransferComponent } from './customer-view/quick-transfer/quick-transfer.component';
import { DashboardComponent } from './dashboard.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardMainViewComponent,
    RequestsComponent,
    RegisterNewComponent,
    ViewEditDetailsComponent,
    TransactionComponent,
    ChangePasswordComponent,
    EditFormComponent,
    ViewCustomerDetailsComponent,
    ManagerViewComponent,
    CashierViewComponent,
    CustomerViewComponent,
    RequestCardComponent,
    ViewHeadingComponent,
    TransferComponent,
    QuickAccessComponent,
    WidgetsComponent,
    AccountDetailComponent,
    QuickTransferComponent,
    DashboardHeaderComponent,
    SidebarComponent,
  ],
  imports: [
    CalendarModule,
    ButtonModule,
    ToastModule,
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    MatProgressSpinnerModule,
  ],
  exports: [],
  providers: [],
})
export class DashboardModule {}
