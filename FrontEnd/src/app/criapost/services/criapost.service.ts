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
  
  BuscaAlteracao(id:string){
    
   return this.httpClient.get<Postagem[]>(this.APIPostagem+'/'+id,this.httpOptions)
   .pipe(
     tap(posts=>console.log('teste :',posts))
   )
  }

  AlteracaoPostagem(postagems:Postagem){
    
    const body = {
      autor:postagems.autor,
      titulo:postagems.titulo,
      postagem:postagems.postagem,
      tema:postagems.tema
    }
    const url = this.APIPostagem+'/'+postagems._id;
    console.log(url);
    return this.httpClient.put<Postagem>(url,body,this.httpOptions).subscribe(data => {
      console.log(data);
      });
    

    
  }
 
  

}
