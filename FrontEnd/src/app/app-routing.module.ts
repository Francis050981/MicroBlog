import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastraloginComponent } from './cadastralogin/cadastralogin/cadastralogin.component';
import { CriapostComponent } from './criapost/criapost/criapost.component';
import { DeleteComponent } from './delete/delete/delete.component';
import { EditaPostComponent } from './edita-post/edita-post/edita-post.component';
import { EditaTemaComponent } from './edita-tema/edita-tema/edita-tema.component';
import { LoginComponent } from './login/login/login.component';
import { TemaComponent } from './tema/tema/tema.component';


const routes: Routes = [
  { path:'', pathMatch:'full', redirectTo:'login'},
  { path:'tema', component: TemaComponent},
  { path:'criapost', component: CriapostComponent},
  { path:'login', component: LoginComponent},
  { path:'delete', component: DeleteComponent},
  { path:'edita-tema', component: EditaTemaComponent},
  { path:'cadastralogin', component: CadastraloginComponent},

  {
    path: 'tema',
    loadChildren: () => import('./tema/tema.module').then(m => m.TemaModule)
  },

 {
    path: 'edita-post',
    loadChildren: () => import('./edita-post/edita-post.module').then(m => m.EditaPostModule)
  },
 
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'postagem',
    loadChildren: () => import('./postagem/postagem.module').then(m => m.PostagemModule)
  },
  {
    path: 'criapost',
    loadChildren: () => import('./criapost/criapost.module').then(m => m.CriapostModule)
  },
  {
    path: 'cadastralogin',
    loadChildren: () => import('./cadastralogin/cadastralogin.module').then(m => m.CadastraloginModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
