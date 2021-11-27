import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TemaService } from 'src/app/tema/service/tema.service'; 
import { Tema } from 'src/app/tema/models/tema';
import { MatDialog } from '@angular/material/dialog';
import { SuccessDialogComponent } from 'src/app/shared/components/success-dialog/success-dialog.component';
import { RouteConfigLoadStart, Router } from '@angular/router';



@Component({
  selector: 'app-edita-tema',
  templateUrl: './edita-tema.component.html',
  styleUrls: ['./edita-tema.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditaTemaComponent implements OnInit {
  temas: Tema[] = [];
  form:FormGroup;
  private formSubmitAttempt: boolean;

  constructor(
    public dialog: MatDialog,
    private temaServico:TemaService, 
    private formBuild:FormBuilder, 
    private router: Router,
    private temaService: TemaService) { 

    this.temaService.list().subscribe(tema=>this.temas = tema);

    this.form = this.formBuild.group({
      nome:['',Validators.required],      
    });
    
    this.formSubmitAttempt = true; 

  }

  ngOnInit(): void {
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

}

