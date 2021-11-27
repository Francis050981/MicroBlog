import { Component, OnInit,Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Tema} from '../../tema/models/tema';
//import { AppComponent } from 'src/app/app.component';

import { AuthService } from 'src/app/login/auth.service';
import { TemaService } from 'src/app/tema/service/tema.service';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {
  
  form:FormGroup;
  private formSubmitAttempt: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Tema,
    public dialogRef: MatDialogRef<EditDialogComponent>,    
    private formBuild:FormBuilder,
    private tema:TemaService    
  ) {

    

    this.form = this.formBuild.group({
      _id:['',Validators.required],
      nome:['',Validators.required],     
    });

    this.form.setValue({
      nome:data.nome,
      _id:data._id
    });
    
    this.formSubmitAttempt = true; 

   }

  ngOnInit(){
    //var nome = this.appcomponent.nome;
    //console.log(nome)
  }

  isFieldInvalid(field:string){
    return (
      (this.form.get(field)?.valid && this.form.get(field)?.touched) ||
      (this.form.get(field)?.untouched && this.formSubmitAttempt)
    );
  }

   fechaDialogAlterar() {
   return this.dialogRef.close();
  }

 async  alterarTema(){
    if(this.form.valid){
      console.log(this.form.value);
      try{
        const respose = await this.tema.AlteracaoTema(this.form.value).subscribe(
          value =>{
            this.fechaDialogAlterar()
          }
        );
      }catch(error){
        console.log(error);
      }
    }
  }

  async deletaTema(){
    return this.dialogRef.close();
  }

 async ExcluirTema(tema: Tema){
  try{
  const respose = await this.tema.deletarTema(tema).subscribe(
    value =>{
      this.fechaDialogAlterar()
  }
  );
  }catch(error){
  console.log(error);
  }
  }


  
  /*
  carreganome(){
    var nome = this.appcomponent.nome;
    return nome
  }
  */

}
