import { Subject } from 'rxjs/Subject';
import { Ingredients } from './../../shared/ingredients.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Recipes } from '../recipe-list/recipe.model';

@Injectable()
 export class RecipeService {
 private recipes:Recipes[] = [new Recipes('Briyani','rice dish', 'https://i.ytimg.com/vi/FR3xZrzsEXY/maxresdefault.jpg',[new Ingredients('chicken',2), new Ingredients('rice',10)]),
                              new Recipes('Fruit Salad','Continental and highly nutritious', 'http://images.media-allrecipes.com/images/55860.jpg',[new Ingredients('mango',5)])];
 recipeSelected = new Subject<Recipes>();                         
  constructor() { }
  getRecipes()
  {
    return this.recipes.slice();
  }
  getRecipesById(index)
  {
    return this.recipes[index];
  }
  setRecipe(recipe:Recipes)
  {
     this.recipes.push(recipe);
     console.log("All the recipes inside service"+this.recipes);
  }  
}
