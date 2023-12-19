import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [SharedModule, FormsModule, CommonModule],
  exports: [],
  declarations: [LoginComponent],
  providers: [],
})
export class LoginModule {}
