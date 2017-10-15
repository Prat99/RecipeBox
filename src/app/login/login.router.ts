import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'signup', component:SignupComponent},
  {path:'login', component:SigninComponent}
];

export const routing = RouterModule.forChild(routes);