import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';
import {routing} from './login.router';
@NgModule({
    declarations:[
        SignupComponent,
        SigninComponent
    ],
    imports:[CommonModule, FormsModule,routing],
    providers:[]
})
export class loginModule{}