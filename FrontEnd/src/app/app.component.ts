import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter, fromEvent, map, Observable } from 'rxjs';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AppMicroBlog';
  //nome = localStorage.getItem('nome');
  nome?: string;

  

  isLoggedIn$: Observable<boolean>;

  constructor(private router: Router, private authService: AuthService){
    
    this.isLoggedIn$ =this.authService.isLoggedIn;
    
    if(localStorage.getItem('nome')){ 
      this.authService.getUsuario().subscribe(
        (data)=>
          this.router.navigate(['/postagem'])
          ,
        (error)=>this.nome = ''
        );
     }
      
  }
ngOnInit(){

}


limpaStorage(){
  localStorage.removeItem('nome');
  localStorage.removeItem('token');
}


  onLogout(){
    this.authService.logout();
  }

  carregaTema(){
    this.router.navigate(['/tema']);
  }

  criaPost(){
    this.router.navigate(['/criapost']);
  }


}

