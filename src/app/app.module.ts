import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { LoginInterceptor } from './login/login.interceptor';

import { MessageService } from 'primeng/api';

import { CalendarModule } from 'primeng/calendar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DashboardModule } from './dashboard/dashboard.module';
import { HomeModule } from './home/home.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    // CalendarModule,
    // ButtonModule,
    ToastModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    // FormsModule,
    // HttpClientModule,
    // NgxPaginationModule,
    // MatProgressSpinnerModule,
    DashboardModule,
    HomeModule,
    PageNotFoundModule,
    LoginModule,
  ],

  providers: [
    MessageService,
    { provide: HTTP_INTERCEPTORS, useClass: LoginInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
