import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { BehaviorSubject, tap } from 'rxjs';
import { Login } from './models/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private readonly API = 'http://localhost:10000/api/usuarios/login';
  private readonly API2 = 'http://localhost:10000/api/usuarios';

  private loggedIn =  new BehaviorSubject<boolean>(false);
  
  userLogin: any = {};
  userLogged: any = {};
  isAuthenticated: boolean = false;
  
  private  token = localStorage.getItem('token');

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json' 
    })
  };

  private httpOptions2 = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'x-auth-token':`${this.token}`,  
    })
  };

  get isLoggedIn(){
    return this.loggedIn.asObservable();
  }
  constructor(
    private router: Router,
    private httpClient: HttpClient
  ) { 
    
    
  }

  getNome(){
    return localStorage.getItem('nome');
  }

  getUsuario(){
    
    return this.httpClient.get<Login>(this.API2+'/'+localStorage.getItem('id'),this.httpOptions2).pipe(tap())

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
            localStorage.setItem('id',rest.id);

            
            this.loggedIn.next(true);
            
            this.router.navigate(['/postagem'])
            .then(() => {
              window.location.reload();
            });
          
      });
      

    
    }
  }

  async logout(){
    this.loggedIn.next(true);
    localStorage.removeItem('nome');
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    await this.router.navigate(['/'])
    .then(() => {
      window.location.reload();
    });

  }

  cadastraUsuario(user:Login){
    const body = {
      nome:user.nome,
      email:user.email,
      senha:user.senha,
      
    }
    return this.httpClient.post<Login>(this.API2,body,this.httpOptions).pipe(
      tap()
    );
  }

}
