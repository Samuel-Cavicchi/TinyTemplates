import { NgModule } from '@angular/core';
import {
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
  MatDividerModule,
  MatSlideToggleModule,
  MatChipsModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatListModule
} from '@angular/material';

const components = [
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
  MatDividerModule,
  MatSlideToggleModule,
  MatChipsModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatListModule
];

@NgModule({
  imports: components,
  exports: components,
})

export class MaterialModule { }
