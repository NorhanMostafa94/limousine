import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';

// Angular Material
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';

// 3rd parties
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

// Components
import { HeaderComponent } from './components';

const COMPONENTS = [HeaderComponent];

const ANGULAR_MATERIAL = [
  MatStepperModule,
  MatInputModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatIconModule,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    NgxMaterialTimepickerModule,
    ...ANGULAR_MATERIAL,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    NgxMaterialTimepickerModule,
    ...COMPONENTS,
    ...ANGULAR_MATERIAL,
  ],
})
export class SharedModule {}
