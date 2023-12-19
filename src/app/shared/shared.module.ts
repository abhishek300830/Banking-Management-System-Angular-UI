import { NgModule } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [CommonModule, AppRoutingModule],
  declarations: [HeaderComponent, FooterComponent],
  providers: [],
  exports: [HeaderComponent, FooterComponent],
})
export class SharedModule {}
