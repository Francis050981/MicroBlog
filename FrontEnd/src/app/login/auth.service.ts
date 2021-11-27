import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Login } from './models/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private readonly API = 'http://localhost:10000/api/usuarios/login';

  private loggedIn =  new BehaviorSubject<boolean>(false);
  
  userLogin: any = {};
  userLogged: any = {};
  isAuthenticated: boolean = false;

  get isLoggedIn(){
    return this.loggedIn.asObservable();
  }
  constructor(
    private router: Router,
    private httpClient: HttpClient
  ) { 
    
    
  }

  login(user:Login){
    if(user.nome !== '' && user.senha !== ''){
     
      
      const body = {
        nome:user.nome,
        senha:user.senha,
        
      }

      
      this.httpClient.post<Login[]>(this.API,body).subscribe(data=>{
          
            const resposta = JSON.stringify(data);
            const rest     = JSON.parse(resposta);
           
            localStorage.setItem('nome',user.nome);
            localStorage.setItem('token',rest.token);


            this.loggedIn.next(true);
            
            this.router.navigate(['/postagem']);
          
      });
      

    
    }
  }

  async logout(){
    this.loggedIn.next(true);
    localStorage.removeItem('nome');
    localStorage.removeItem('token');
    await this.router.navigate(['/login']);

  }

}
