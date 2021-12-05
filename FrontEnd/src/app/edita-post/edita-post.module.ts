import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditaPostRoutingModule } from './edita-post-routing.module';
import { EditaPostComponent } from './edita-post/edita-post.component';
import { MatCardModule } from '@angular/material/card'; 
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider'; 
import {MatListModule} from '@angular/material/list';
import {MatSelectModule, MAT_SELECT_SCROLL_STRATEGY_PROVIDER} from '@angular/material/select'; 
import { MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    EditaPostComponent
  ],
  imports: [
    CommonModule,
    EditaPostRoutingModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatExpansionModule,
    MatDividerModule,
    MatListModule,
    MatSelectModule
  ],
  providers: [
    MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER,
    MAT_SELECT_SCROLL_STRATEGY_PROVIDER
 ]
})
export class EditaPostModule { }
