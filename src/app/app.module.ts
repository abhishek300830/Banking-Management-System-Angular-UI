import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginInterceptor } from './login/login.interceptor';
// import { DashboardModule } from './dashboard/dashboard.module';
// import { HomeModule } from './home/home.module';
// import { PageNotFoundModule } from './page-not-found/page-not-found.module';
// import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    ToastModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
  ],

  providers: [
    MessageService,
    { provide: HTTP_INTERCEPTORS, useClass: LoginInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
