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
  ServiceCardComponent,
  ServicesComponent,
  ContactUsComponent,
  GalleryCardComponent
} from './components/';

const PAGES = [HomeComponent];
const COMPONENTS = [
  AboutUsComponent,
  ReservationComponent,
  GalleryComponent,
  ServiceCardComponent,
  ServicesComponent,
  ContactUsComponent,
  GalleryCardComponent
];

@NgModule({
  declarations: [...COMPONENTS, ...PAGES],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
