import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Tema } from '../models/tema';

@Injectable({
  providedIn: 'root'
})

export class TemaService {
  private readonly API = 'http://localhost:10000/api/temas';
  private  token = localStorage.getItem('token');
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'x-auth-token':`${this.token}`, 
    })
  };

  constructor(private httpClient: HttpClient) { }
  
  async criarTema(tema:Tema){
    const body = {
      nome:tema.nome
  }

    const response = await this.httpClient.post<Tema>(this.API,body,this.httpOptions).subscribe((response:Tema)=>{
      return response;
    });
   return  response;
  }

  list() {
    return this.httpClient.get<Tema[]>(this.API,this.httpOptions).pipe(
      tap(tema=>console.log(tema))
    );
  }

  AlteracaoTema(tema:Tema){
    console.log("entro aqui");
    console.log(tema);
    const body = {
      nome:tema.nome
    }
    const url = this.API+'/'+tema._id;
    console.log(url);
    return this.httpClient.put<Tema>(url,body,this.httpOptions).pipe(
      tap(tema=>console.log(tema))
    )

    
  }

  deletarTema(tema:Tema){
    const url = this.API+'/'+tema._id;
    return this.httpClient.delete<Tema>(url,this.httpOptions).pipe(
      tap(tema=>console.log(tema))
    )


  }
}
