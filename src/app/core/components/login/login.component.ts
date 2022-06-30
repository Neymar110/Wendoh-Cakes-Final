import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { from } from 'rxjs';
import { AuthService } from 'shared/services/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  hiddenVar:boolean = true;
  new_password:any;
  constructor(private auth : AuthService, private fireAuth: Auth, private router : Router) { }

  loginForm = new FormGroup({
    email:new FormControl("", [Validators.required, Validators.email]),
    password:new FormControl("", [Validators.required, Validators.minLength(8)])
  })

  google_login() {
    this.auth.login_with_google();
  }

  email_login(email:string, password:string){
    return from(signInWithEmailAndPassword(this.fireAuth, email, password));
  }

  submit(){
    if(!this.loginForm.valid) {
      return;
    }

    const {email, password} = this.loginForm.value;
    from(this.auth.login_with_email_and_password(email,password)).subscribe(() => {
      this.router.navigate(["/home"]);
    })
    console.log("Hola")
    console.log(this.loginForm.value)
  }

  get email(){
    return this.loginForm.get("email");
  }

  get password(){
    return this.loginForm.get("password");
  }

  printer(){
    this.new_password = this.password
    console.log(this.new_password);
  }
}
