import { Routes, RouterModule} from '@angular/router';
import {ShoppingListComponent} from './shopping/shopping-list/shopping-list.component';
import {RecipesComponent} from './recipe-book/recipes/recipes.component';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  { path: 'shoppinglist', component:ShoppingListComponent },
  { path: 'recipes', component: RecipesComponent },
  {path:'', component:HomeComponent}
];

export const routing = RouterModule.forRoot(routes);