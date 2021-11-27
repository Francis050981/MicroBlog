import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Tema } from '../models/tema';
import { CriapostService } from '../services/criapost.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-criapost',
  templateUrl: './criapost.component.html',
  styleUrls: ['./criapost.component.css']
})

export class CriapostComponent implements OnInit {

  tema$:Tema[] = [];
  form:FormGroup;
  private formSubmitAttempt: boolean;

  constructor(
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

  onSubmitCad(){
    if(this.form.valid){
      this.temaServico.criarPostagem(this.form.value);            
    }

    this.formSubmitAttempt = true;
  }

}





