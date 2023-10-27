import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';

// Angular Material
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';

// Components
import { HeaderComponent } from './components';

const COMPONENTS = [HeaderComponent];

const ANGULAR_MATERIAL = [
  MatStepperModule,
  MatInputModule,
  MatFormFieldModule,
  MatDatepickerModule,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    ...ANGULAR_MATERIAL,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    ...COMPONENTS,
    ...ANGULAR_MATERIAL,
  ],
})
export class SharedModule {}
