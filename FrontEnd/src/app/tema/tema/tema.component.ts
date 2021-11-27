import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TemaService } from '../service/tema.service'
import { Tema } from '../models/tema'
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SuccessDialogComponent } from 'src/app/shared/components/success-dialog/success-dialog.component';
import { RouteConfigLoadStart, Router } from '@angular/router';
import { EditDialogComponent } from 'src/app/shared/edit-dialog/edit-dialog.component';
//import { DialogoAlteracaoComponent } from 'src/app/edita-tema/edita-tema/dialogo-alteracao/dialogo-alteracao.component';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css'],

  changeDetection: ChangeDetectionStrategy.OnPush,

})

export class TemaComponent implements OnInit {
  
  temas: Tema[] = [];
  form:FormGroup;
  private formSubmitAttempt: boolean;
  nome: any;

  constructor(
    public dialog: MatDialog,
    private temaServico:TemaService, 
    private formBuild:FormBuilder, 
    private router: Router,
    private temaService: TemaService,
    //public dialogRef: MatDialogRef<DialogoAlteracaoComponent>,
    ) { 
      this.temaService.list().subscribe(tema=>this.temas = tema);
      
    this.form = this.formBuild.group({
      nome:['',Validators.required],      
    });
    
    this.formSubmitAttempt = true; 

  }

  ngOnInit(){

    
  }


  orgTemas(){
     
    let a = this.temas.sort((a, b) => (a.nome < b.nome) ? -1 : 1);
    console.log(a);
    return a
  }


  isFieldInvalid(field:string){
    return (
      (this.form.get(field)?.valid && this.form.get(field)?.touched) ||
      (this.form.get(field)?.untouched && this.formSubmitAttempt)
    );
  }

  cadastraTema(){
    if(this.form.valid){
      
      const res = this.temaServico.criarTema(this.form.value);
            
      this.onMessageSucess("Tema cadastrado com sucesso!");
    }
   
    this.formSubmitAttempt = true;

  }

  carregaPostagens(){
    this.router.navigate(['/postagem']);
  }
  
  onMessageSucess(sucessMessage:string){
      this.dialog.open(SuccessDialogComponent, {
        data:sucessMessage,
      });
      //this.carregaPostagens();
    }
    
    abreDialogAlterar(tema:Tema) {

      console.log(tema);
      const dialogRef = this.dialog.open(EditDialogComponent, {
        width: '350px',        
        data: tema,
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        //this.animal = result;
      });

      return;
    }





}


