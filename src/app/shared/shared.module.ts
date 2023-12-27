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
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// 3rd parties
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

// Components
import { HeaderComponent } from './components';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import {
  MAT_SNACK_BAR_DATA,
  MatSnackBarModule,
} from '@angular/material/snack-bar';

const COMPONENTS = [HeaderComponent];

const ANGULAR_MATERIAL = [
  MatStepperModule,
  MatInputModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatIconModule,
  MatSelectModule,
  MatCheckboxModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
];

@NgModule({
  declarations: [...COMPONENTS, SnackbarComponent],
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
    SnackbarComponent,
  ],
  providers: [{ provide: MAT_SNACK_BAR_DATA, useValue: {} }],
})
export class SharedModule {}
