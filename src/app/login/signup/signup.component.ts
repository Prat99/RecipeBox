import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { User} from './user.model';
import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user:User;
  genders:Array<string> = ['male', 'female'];
  

  constructor(private loginService:LoginService, private route:Router) {
    this.user = new User();
   }
 
  ngOnInit() {
  }
   register(user:NgForm)
   {
     console.log("register user "+user);
     const email = user.value.email;
     const password = user.value.password;
     this.loginService.signUpUser(email, password);
     this.route.navigate(['/recipes']);
   }
}
