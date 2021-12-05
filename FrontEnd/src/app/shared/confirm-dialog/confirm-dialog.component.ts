import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Postagem } from 'src/app/criapost/models/postagem';
import { PostagemService } from 'src/app/postagem/services/postagem.service';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {
  postagens: Postagem[] = [];

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Postagem,
    private router: Router,
    private dialogref: MatDialogRef<ConfirmDialogComponent>,
    private postagemService:PostagemService,
    public dialog: MatDialog,
    ) {
      this.postagemService.list().subscribe(postagem =>this.postagens = postagem); 
    }
  

  ngOnInit(): void {
  }

  carregaPostagens(){
    this.router.navigate(['/postagem']);
  }

  FechaTudo(){
    this.dialogref.close();
  }






  async DeletarPostagemDialog(postagem: Postagem){
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

}
