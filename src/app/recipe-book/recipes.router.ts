import { CanActivateViaAuthGuard } from './../login/guards/auth-guard.service';
import { canDeactivateGuard } from './recipe-list/guard/candeactivateguard.service';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { Recipes } from './recipe-list/recipe.model';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { Routes, RouterModule } from '@angular/router';

const routes:Routes = [
          { path: '', component: RecipesComponent, children:[
          { path: ':id', component: RecipeDetailsComponent },
          { path: ':id/edit', component: RecipeEditComponent }]},
          { path: 'recipelist', component:RecipeListComponent, canDeactivate:[canDeactivateGuard]}
];

export  const routing = RouterModule.forChild(routes);