import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found.component';
import { SharedModule } from '../shared/shared.module';
import { PageNotFountRoutingModule } from './page-not-found-routing.module';

@NgModule({
  imports: [SharedModule, PageNotFountRoutingModule],
  exports: [],
  declarations: [PageNotFoundComponent],
  providers: [],
})
export class PageNotFoundModule {}
