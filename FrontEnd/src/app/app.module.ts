import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './login/auth.service';
import {MatMenuModule} from '@angular/material/menu';
//import { NovoPostComponent } from './novoPost/novo-post/novo-post.component';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import { CadastraloginComponent } from './cadastralogin/cadastralogin/cadastralogin.component';
//import { EditaTemaComponent } from './editaTema/edita-tema/edita-tema.component';
const mats = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatTooltipModule,
  MatInputModule,
  MatFormFieldModule,
  HttpClientModule,
  ReactiveFormsModule,
  MatMenuModule,
  MatSelectModule,
  MatDialogModule
];

@NgModule({
  declarations: [
    AppComponent,
   // CadastraloginComponent,
    //EditaTemaComponent,
    //NovoPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    mats,
  ],
  exports:[mats],
  bootstrap: [AppComponent]
})
export class AppModule { }
