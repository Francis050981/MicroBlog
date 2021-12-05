import { Component, Inject, OnInit, Optional } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Tema } from 'src/app/criapost/models/tema';
import { CriapostService } from 'src/app/criapost/services/criapost.service';
import { Postagem } from 'src/app/criapost/models/postagem';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SuccessDialogComponent } from 'src/app/shared/components/success-dialog/success-dialog.component';


@Component({
  selector: 'app-edita-post',
  templateUrl: './edita-post.component.html',
  styleUrls: ['./edita-post.component.css']
})
export class EditaPostComponent implements OnInit {

  tema$:Tema[] = [];
  postagems$:Postagem[] = [];
  form:FormGroup;
  private formSubmitAttempt: boolean;

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private formBuild:FormBuilder,
    private temaServico:CriapostService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Postagem,
    public dialogref: MatDialogRef<EditaPostComponent>
  ) {
    
    this.temaServico.listaTema().subscribe(tema=>this.tema$ = tema);  
       
       this.form = this.formBuild.group({
          titulo:['',Validators.required],
          postagem:['',Validators.required],
          tema:['',Validators.required], 
          _id:['',Validators.required]                       
      });
     

      this.form.setValue({
        titulo:data.titulo || '',
        postagem:data.postagem || '',
        tema:data.tema || '',
        _id:data._id || ''    
      });
     
      this.router.navigate(['/postagem']);
      this.formSubmitAttempt = true; 
   }

  ngOnInit(): void {

     
  }
  
  isFieldInvalid(field:string){
    return (
      (this.form.get(field)?.valid && this.form.get(field)?.touched) ||
      (this.form.get(field)?.untouched && this.formSubmitAttempt)
    );
  }

  onSubmitAltCad(){
    if(this.form.valid){
        this.temaServico.AlteracaoPostagem(this.form.value);
        this.onMessageSucess("Postagem alterada com sucesso!");
    }
  }

  FechaTudo(){
    this.dialogref.close();
    /*this.router.navigate(['/postagem']);*/

    this.router.navigate(['/postagem'])
    .then(() => {
      window.location.reload();
    });



  }

  onMessageSucess(sucessMessage:string){
    this.dialog.open(SuccessDialogComponent, {
      data:sucessMessage,
    });
    //this.carregaPostagens();
  }
}
