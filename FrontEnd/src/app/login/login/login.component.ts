import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Login } from '../models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:FormGroup;
  private formSubmitAttempt: boolean;

  constructor(
      private formBuild:FormBuilder,
      private authService: AuthService
    ) {
      this.form = this.formBuild.group({
        nome:['',Validators.required],
        senha:['',Validators.required]
      });
      this.formSubmitAttempt = true;
   }

  ngOnInit() {
    //console.log(localStorage.getItem('nome'));
    //console.log(localStorage.getItem('token'));
    localStorage.removeItem('nome');
    localStorage.removeItem('token');
    
  }

  isFieldInvalid(field:string){
    return (
      (this.form.get(field)?.valid && this.form.get(field)?.touched) ||
      (this.form.get(field)?.untouched && this.formSubmitAttempt)
    );
  }

  onSubmit(){
   if(this.form.valid){
     this.authService.login(this.form.value)
   }
   this.formSubmitAttempt = true;
  }

}
