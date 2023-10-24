import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

// Pages
import { HomeComponent } from './pages';

// Components
import { AboutUsComponent } from './components/';

const PAGES = [HomeComponent];
const COMPONENTS = [AboutUsComponent];

@NgModule({
  declarations: [...COMPONENTS, ...PAGES],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
