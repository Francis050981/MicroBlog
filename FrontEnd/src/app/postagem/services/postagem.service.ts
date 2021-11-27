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
}
