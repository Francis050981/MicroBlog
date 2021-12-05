import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router'
import { map, Observable, Subject } from 'rxjs';
import { EditaPostComponent } from 'src/app/edita-post/edita-post/edita-post.component';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { EditPostDialogComponent } from 'src/app/shared/edit-post-dialog/edit-post-dialog.component';
import { Postagem } from '../models/postagem';
import { PostagemService } from '../services/postagem.service';


@Component({
  selector: 'app-postagem',
  templateUrl: './postagem.component.html',
  styleUrls: ['./postagem.component.css']
})
export class PostagemComponent implements OnInit {

  postagens: Postagem[] = [];
 
  private searchTerms = new Subject<string>();
  // postagemService:PostagemService;
   
  constructor(
      private postagemService:PostagemService,
      private route:ActivatedRoute,  
      public dialog: MatDialog,
      ) {
    //this.postagemService = new PostagemService();
    //this.postagens = this.postagemService.list();
       
      this.filterPostage('');
   }
  ngOnInit(): void {
    
  }
  
  

  load() {
    location.reload();
  }

  filterPostage(search:string){
    if(search){
      search = localStorage.getItem('nome') || '';
      this.postagemService.list().pipe(map(data=> data.filter(dt=>dt.autor == search))).subscribe(postagem =>this.postagens = postagem);
    }else{

      this.postagemService.list().subscribe(postagem =>this.postagens = postagem);
    }
    
  }

  AbrirDialogAlterar(postagem: Postagem){
    console.log(postagem);
    const dialogRef = this.dialog.open(EditaPostComponent, {
      width: '400px',
      data: postagem,
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log('The dialog was closed');
      //this.animal = result;
    });

    return;
  }

  async DeletarPostagem(postagem: Postagem){
    try{
      const respose = await this.postagemService.deletar(postagem).subscribe(
        value =>{
         window.location.reload();
        }
      );
      }catch(error){
        console.log(error);
      }
    }

  AbrirDialogConfirmDel(postagem: Postagem){
    console.log(postagem);
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: postagem,
  })}

}
