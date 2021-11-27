import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriapostComponent } from './criapost/criapost/criapost.component';
import { DeleteComponent } from './delete/delete/delete.component';
import { EditaTemaComponent } from './edita-tema/edita-tema/edita-tema.component';
import { EditeComponent } from './edite/edite/edite.component';
import { LoginComponent } from './login/login/login.component';
import { TemaComponent } from './tema/tema/tema.component';


const routes: Routes = [
  { path:'', pathMatch:'full', redirectTo:'login'},
  { path:'tema', component: TemaComponent},
  { path:'criapost', component: CriapostComponent},
  { path:'login', component: LoginComponent},
  { path:'delete', component: DeleteComponent},
  { path:'edite', component: EditeComponent},
  { path:'edita-tema', component: EditaTemaComponent},

  {
    path: 'tema',
    loadChildren: () => import('./tema/tema.module').then(m => m.TemaModule)
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
