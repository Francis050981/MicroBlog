import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Tema } from 'src/app/criapost/models/tema';
import { CriapostService } from 'src/app/criapost/services/criapost.service';
import { Postagem } from 'src/app/criapost/models/postagem';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-post-dialog',
  templateUrl: './edit-post-dialog.component.html',
  styleUrls: ['./edit-post-dialog.component.css']
})
export class EditPostDialogComponent implements OnInit {

  tema$:Tema[] = [];
  form:FormGroup;
  private formSubmitAttempt: boolean;
  constructor(
    private route:ActivatedRoute,
    private formBuild:FormBuilder,
    private temaServico:CriapostService 
  ) {

    this.temaServico.listaTema().subscribe(tema=>this.tema$ = tema);  
       
       this.form = this.formBuild.group({
          titulo:['',Validators.required],
          postagem:['',Validators.required],
          tema:['',Validators.required],                        
      });
      
    
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

  }

}
