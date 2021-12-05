import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { Postagem } from '../models/postagem';

@Injectable({
  providedIn: 'root'
})

export class PostagemService {
  private readonly API = 'http://localhost:10000/api/posts';
  private  token = localStorage.getItem('token');
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'x-auth-token':`${this.token}`, 
    })
  };

  constructor(private httpClient: HttpClient) { }
  
  list() {
    return this.httpClient.get<Postagem[]>(this.API,this.httpOptions).pipe(
      tap(postagem=>console.log(postagem))
    );
  }

  deletar(posts:Postagem){
    const url = this.API+'/'+posts._id;
    return this.httpClient.delete<Postagem>(url,this.httpOptions).pipe(
      tap(post=>console.log(post))
    )


  }
}
