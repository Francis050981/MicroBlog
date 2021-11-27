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
import {MatDialogModule} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { TemaRoutingModule } from './tema-routing.module';
import { TemaComponent } from './tema/tema.component';
import { SharedModule } from '../shared/shared.module';
//import { EditDialogModule } from '../shared/edit-dialog/edit-dialog.module';

//import {ScrollingModule} from '@angular/cdk/scrolling';
//import {CdkVirtualScrollViewport} from "@angular/cdk/scrolling";

@NgModule({
  declarations: [
    TemaComponent    
  ],
  imports: [
    CommonModule,
    TemaRoutingModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatExpansionModule,
    MatDividerModule,
    MatListModule,
    SharedModule,
    MatDialogModule,
    MatIconModule
    //EditDialogModule,
    //ScrollingModule,
    //CdkVirtualScrollViewport,

  ]
})
export class TemaModule { }
