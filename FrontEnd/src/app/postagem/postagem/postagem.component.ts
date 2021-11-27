import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Postagem } from '../models/postagem';
import { PostagemService } from '../services/postagem.service';

@Component({
  selector: 'app-postagem',
  templateUrl: './postagem.component.html',
  styleUrls: ['./postagem.component.css']
})
export class PostagemComponent implements OnInit {

  postagens: Postagem[] = [];

  
  // postagemService:PostagemService;

  constructor(private postagemService:PostagemService) {
    //this.postagemService = new PostagemService();
    //this.postagens = this.postagemService.list();
    this.postagemService.list().subscribe(postagem =>this.postagens = postagem); 
    
   }

  ngOnInit(): void {
    console.log(localStorage.getItem('nome'));
    console.log(localStorage.getItem('token'));
    
  }

}
