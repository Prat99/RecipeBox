import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { User } from './../signup/user.model';
import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
   user:User;
   isUser:boolean;
   token:string;
   isLogin:boolean;
  constructor(private loginService:LoginService, private route:Router) {
   this.user = new User();
   }

  ngOnInit() {
  }
   login(formValue:NgForm){
     const email= formValue.value.email;
     const password= formValue.value.password;
     this.loginService.logInUser(email, password);
   }
   checkState(){
     this.isLogin=this.loginService.isAuthenticated();
     console.log('the value of isLogin '+this.isLogin);
   }

}
