import { Routes, RouterModule} from '@angular/router';
import {ShoppingListComponent} from './shopping/shopping-list/shopping-list.component';
import {RecipesComponent} from './recipe-book/recipes/recipes.component';
import {RecipeDetailsComponent} from './recipe-book/recipe-details/recipe-details.component';
import {RecipeEditComponent} from './recipe-book/recipe-edit/recipe-edit.component';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  { path: 'shoppinglist', component:ShoppingListComponent },
  { path: 'recipes', component: RecipesComponent, children:[
    { path: ':id', component: RecipeDetailsComponent },
    { path: ':id/edit', component: RecipeEditComponent }]
  },
  {path:'', component:HomeComponent}
];
export const routing = RouterModule.forRoot(routes);