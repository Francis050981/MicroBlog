import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Tema } from '../models/tema';
import { Postagem } from '../models/postagem';
@Injectable({
  providedIn: 'root'
})
export class CriapostService {
  private readonly API         = 'http://localhost:10000/api/temas';
  private readonly APIPostagem = 'http://localhost:10000/api/posts';
  private  token = localStorage.getItem('token');

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'x-auth-token':`${this.token}`, 
      
    })
  };

  constructor(private httpClient: HttpClient) { }

  listaTema(){
    
    return this.httpClient.get<Tema[]>(this.API,this.httpOptions).pipe(
      tap(temas=>console.log(temas))
    );
  }

  criarPostagem(posta:Postagem){    
    console.log(posta);
    const body = {
      autor: localStorage.getItem('nome'),
      titulo: posta.titulo,
      postagem: posta.postagem,
      tema:posta.tema
    }

    this.httpClient.post<Postagem>(this.APIPostagem,body,this.httpOptions).subscribe(response=>{
      console.log(response);
    });

  }

}
