import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  imports: [SharedModule, FormsModule, CommonModule, LoginRoutingModule],
  exports: [],
  declarations: [LoginComponent],
  providers: [],
})
export class LoginModule {}
