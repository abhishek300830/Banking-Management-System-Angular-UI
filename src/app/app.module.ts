import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginInterceptor } from './login/interceptor/login.interceptor';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    ToastModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
  ],

  providers: [
    MessageService,
    { provide: HTTP_INTERCEPTORS, useClass: LoginInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
