import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

// Pages
import { HomeComponent } from './pages';
const PAGES = [HomeComponent];

@NgModule({
  declarations: [...PAGES],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
