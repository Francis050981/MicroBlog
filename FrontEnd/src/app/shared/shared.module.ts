import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuccessDialogComponent } from './components/success-dialog/success-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider'; 
import {MatListModule} from '@angular/material/list';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { EditPostDialogComponent } from './edit-post-dialog/edit-post-dialog.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

//import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [
    SuccessDialogComponent,
    EditDialogComponent,
    EditPostDialogComponent,
    ConfirmDialogComponent    
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatExpansionModule,
    MatDividerModule,
    MatListModule,

  ],
  exports:[SuccessDialogComponent]
})
export class SharedModule { }
