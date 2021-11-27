import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostagemComponent } from './postagem/postagem.component';

const routes: Routes = [{
  path:'',
  component:PostagemComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostagemRoutingModule { }
