import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditeRoutingModule } from './edite-routing.module';
import { EditeComponent } from './edite/edite.component';


@NgModule({
  declarations: [
    EditeComponent
  ],
  imports: [
    CommonModule,
    EditeRoutingModule
  ]
})
export class EditeModule { }
