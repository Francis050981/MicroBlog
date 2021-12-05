import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './confirm-dialog.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card'; 
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider'; 
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select'; 



@NgModule({
  declarations: [
    ConfirmDialogComponent,
],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatDividerModule,
    MatListModule,
    MatSelectModule,
  ]
})
export class ConfirmDialogModule { }
