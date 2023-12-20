import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardMainViewComponent } from './dashboard-main-view/dashboard-main-view.component';
import { RequestsComponent } from './manager-view/requests/requests.component';
import { RegisterNewComponent } from './register-new/register-new.component';
import { ViewEditDetailsComponent } from './view-edit-details/view-edit-details.component';
import { TransactionComponent } from './transaction/transaction.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { DashboardComponent } from './dashboard.component';
import { LoginGuard } from '../login/login.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [LoginGuard],
    children: [
      {
        path: '',
        component: DashboardMainViewComponent,
      },
      {
        path: 'requests',
        component: RequestsComponent,
      },
      {
        path: 'register',
        component: RegisterNewComponent,
      },
      {
        path: 'editcustomer',
        component: ViewEditDetailsComponent,
      },
      {
        path: 'transactions',
        component: TransactionComponent,
      },
      {
        path: 'changepassword',
        component: ChangePasswordComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
