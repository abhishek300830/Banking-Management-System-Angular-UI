import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [SharedModule, AppRoutingModule],
  exports: [],
  declarations: [PageNotFoundComponent],
  providers: [],
})
export class PageNotFoundModule {}
