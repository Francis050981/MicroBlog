import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostagemRoutingModule } from './postagem-routing.module';
import { PostagemComponent } from './postagem/postagem.component';
import { MatCardModule } from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar'; 
import {MatDividerModule} from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [
    PostagemComponent
  ],
  imports: [
    CommonModule,
    PostagemRoutingModule,
    MatCardModule,
    MatProgressBarModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule
  ]
})
export class PostagemModule { }
