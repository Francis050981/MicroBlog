import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/login/auth.service';

@Component({
  selector: 'app-cadastralogin',
  templateUrl: './cadastralogin.component.html',
  styleUrls: ['./cadastralogin.component.css']
})
export class CadastraloginComponent implements OnInit {
  
  form:FormGroup;
  private formSubmitAttempt: boolean;

  constructor(
    private formBuild:FormBuilder,
    private login:AuthService,
    private route:Router
  ) {

    this.form = this.formBuild.group({
      nome:['',Validators.required],
      senha:['',Validators.required],
      email:['',Validators.required]                
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

  onSubmit(){
    if(this.form.valid){
      this.login.cadastraUsuario(this.form.value).subscribe((data)=>this.route.navigate(['login']));
    }
    this.formSubmitAttempt = false;
  }

}
