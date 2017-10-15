import { CanActivateViaAuthGuard, CanLoadTeamSection} from './login/guards/auth-guard.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RecipeListComponent } from './recipe-book/recipe-list/recipe-list.component';
import { canDeactivateGuard } from './recipe-book/recipe-list/guard/candeactivateguard.service';
import { Routes, RouterModule, CanDeactivate, CanActivate, CanLoad } from '@angular/router';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path:'', redirectTo:'welcome', pathMatch:'full'},
  {path:'home', component:HomeComponent, canActivate:[CanActivateViaAuthGuard]},
  {path:'recipes', loadChildren:'./recipe-book/recipes.module#RecipesModule', canActivate:[CanActivateViaAuthGuard]},
  {path:'shoppinglist', loadChildren:'./shopping/shopping.module#ShoppingModule', canActivate:[CanActivateViaAuthGuard]},
  {path:'welcome', component:WelcomeComponent},
  {path:'**', component: PagenotfoundComponent}
];

export const routing = RouterModule.forRoot(routes);