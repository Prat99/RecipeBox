import { Injectable, EventEmitter } from '@angular/core';
import { Recipes } from '../recipe-list/recipe.model';
import {Ingredients} from '../../shared/ingredients.model';

@Injectable()
 export class RecipeService {
 private recipes:Recipes[] = [new Recipes('Briyani','rice dish', 'https://i.ytimg.com/vi/FR3xZrzsEXY/maxresdefault.jpg',[new Ingredients('chicken',2), new Ingredients('rice',10)]),
                              new Recipes('Fruit Salad','Continental and highly nutritious', 'http://images.media-allrecipes.com/images/55860.jpg',[new Ingredients('mango',5)])];
 recipeSelected = new EventEmitter<Recipes[]>();                           
  constructor() { }
  getRecipes()
  {
    return this.recipes.slice();
  }
    
}
