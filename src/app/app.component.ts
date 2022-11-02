import { NONE_TYPE } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  
  loginForm:any;
  public showPassword: boolean = false;


   constructor() {}
    OnInit() {
      this.loginForm= new FormGroup (
        {
        email: new FormControl ('',[Validators.required,Validators.email]),
        password: new FormControl('',[Validators.required,Validators.minLength(6)])
        }
      )
      
    }
  onLogin() {
     if (!this.loginForm.valid) {
      return;
     }
     console.log(this.loginForm.value);
     }

     public togglePasswordVisibility(): void {
      this.showPassword = !this.showPassword;
     }

}


   
  
