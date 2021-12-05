import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { CadastraloginRoutingModule } from './cadastralogin-routing.module';
import { CadastraloginComponent } from './cadastralogin/cadastralogin.component';

@NgModule({
  declarations: [CadastraloginComponent],
  imports: [
    CommonModule,
    CadastraloginRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ]
})
export class CadastraloginModule { }
