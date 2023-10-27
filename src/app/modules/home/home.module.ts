import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

// Pages
import { HomeComponent } from './pages';

// Components
import { AboutUsComponent, ReservationComponent } from './components/';
import { SharedModule } from 'src/app/shared/shared.module';

const PAGES = [HomeComponent];
const COMPONENTS = [AboutUsComponent, ReservationComponent];

@NgModule({
  declarations: [...COMPONENTS, ...PAGES],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
