import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginGuard } from './login/login.guard';
import { ChangePasswordComponent } from './dashboard/change-password/change-password.component';
import { RequestsComponent } from './dashboard/manager-view/requests/requests.component';
import { RegisterNewComponent } from './dashboard/register-new/register-new.component';
import { ViewEditDetailsComponent } from './dashboard/view-edit-details/view-edit-details.component';
import { TransactionComponent } from './dashboard/transaction/transaction.component';
import { DashboardMainViewComponent } from './dashboard/dashboard-main-view/dashboard-main-view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
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
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
