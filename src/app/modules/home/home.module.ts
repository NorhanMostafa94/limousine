import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

// Modules
import { SharedModule } from 'src/app/shared/shared.module';

// Pages
import { HomeComponent } from './pages';

// Components
import {
  AboutUsComponent,
  ReservationComponent,
  GalleryComponent,
} from './components/';
import { ServicesComponent } from './components/services/services.component';
import { ServiceCardComponent } from './components/service-card/service-card.component';

const PAGES = [HomeComponent];
const COMPONENTS = [AboutUsComponent, ReservationComponent, GalleryComponent];

@NgModule({
  declarations: [...COMPONENTS, ...PAGES, GalleryComponent, ServicesComponent, ServiceCardComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
