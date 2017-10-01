import { User} from './user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user:User;
  genders:Array<string> = ['male', 'female'];
  constructor() {
    this.user = new User();
   }
 
  ngOnInit() {
  }
   register(user)
   {
     console.log("register user "+JSON.stringify(user));

   }
}
