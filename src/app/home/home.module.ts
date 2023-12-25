import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { BodyComponent } from './main-content/main-content.component';
import { JoinUsComponent } from './main-content/join-us/join-us.component';
import { OurFeaturesComponent } from './main-content/our-features/our-features.component';

@NgModule({
  imports: [SharedModule, HomeRoutingModule],
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
