import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider'; 
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select'; 
import { CriapostRoutingModule } from './criapost-routing.module';
import { CriapostComponent } from './criapost/criapost.component';


@NgModule({
  declarations: [
    CriapostComponent
  ],
  imports: [
    CommonModule,
    CriapostRoutingModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatExpansionModule,
    MatDividerModule,
    MatListModule,
    MatSelectModule,

  ],

})
export class CriapostModule { }
