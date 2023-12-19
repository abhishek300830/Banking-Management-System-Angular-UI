import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { BodyComponent } from './body/body.component';
import { SharedModule } from '../shared/shared.module';
import { JoinUsComponent } from './body/join-us/join-us.component';
import { OurFeaturesComponent } from './body/our-features/our-features.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [SharedModule, AppRoutingModule],
  exports: [],
  declarations: [
    HomeComponent,
    BodyComponent,
    JoinUsComponent,
    OurFeaturesComponent,
  ],
  providers: [],
})
export class HomeModule {}
