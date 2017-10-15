import { Router } from '@angular/router';
import { User } from './signup/user.model';
import { Injectable, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class LoginService implements OnInit{
token:string;
constructor(private route:Router){}
ngOnInit(){
}
 signUpUser(email:string, password:string){
     firebase.auth().createUserWithEmailAndPassword(email, password).then(      
         (res)=>{
               firebase.auth().currentUser.getToken().then(
                   (tk)=>{
                       this.token = tk;
                       this.route.navigate(['/home']);
                   }
               )
            }
        ).catch(
                (error)=>{
                    console.log(error);
                    }
     )
 }
 logInUser(email:string, password:string){
     firebase.auth().signInWithEmailAndPassword(email, password).then(
         (res)=>{
             //console.log("inside login user"+res);
             this.route.navigate(['/home']);
             firebase.auth().currentUser.getToken().then(
                 (tk)=>{
                     this.token = tk;
                     console.log('inside callback '+this.token);
                 }
             )}
     ).catch(
         (err)=>{
                  console.log(err);
         }
     )
 }
 checkState() {
     firebase.auth().onAuthStateChanged(user=>{
         if(user) {
             console.log(user);
         }
         else {
             console.log('not logged in');
         }
     });
 }

 getToken(){
     firebase.auth().currentUser.getToken().then(
         (tk)=>{this.token = tk;}
     );
    // console.log("this is the jwt token "+this.token);
         return this.token;
  }
  isAuthenticated():boolean{
      //console.log('state of token '+this.token);
      return this.token !=null; 
  }
  logout() {
      firebase.auth().signOut();
      this.token = null;
  }
  checkToken() {
       if(!this.token){
        this.token=localStorage.getItem('token');
        console.log('inside check token '+this.token);
    }
  }
    
}