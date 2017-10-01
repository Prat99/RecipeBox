import { Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { Ingredients } from './../../shared/ingredients.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Recipes } from '../recipe-list/recipe.model';
import { StorageDataService } from './../../shared/storage-data.service';

@Injectable()
 export class RecipeService {
//  private recipes:Recipes[] = [new Recipes('Briyani',
//                               'rice dish', 
//                               'https://i.ytimg.com/vi/FR3xZrzsEXY/maxresdefault.jpg',
//                               [new Ingredients('chicken',2), new Ingredients('rice',10)]),
//                               new Recipes('Fruit Salad',
//                               'Continental and highly nutritious',
//                                'http://images.media-allrecipes.com/images/55860.jpg',[new Ingredients('mango',5)])];
  recipes:Recipes[];
  recipeSelected = new Subject<Recipes>();                         
  constructor(private fService:StorageDataService) { }
  getRecipes(){
    //return this.recipes.slice();
    this.fService.getRecipes().subscribe(
      (data)=>{this.recipes = data;},
      (err)=>{console.log(err);}
    );
  }
  getRecipesById(index){
    this.getRecipes();
    return this.recipes[index];
  }
  setRecipe(recipe:Recipes){
     this.recipes.push(recipe);
     this.fService.saveRecipes(this.recipes).subscribe(
       (res:Response)=>{console.log(res);},
       (err:Error)=>{console.log(err)}
     )
     console.log("All the recipes inside service"+this.recipes);
  }  
  deleteIngredient(recipeIndex, ingredientIndex){
    console.log("indexxxx::"+recipeIndex, ingredientIndex);
    this.recipes[recipeIndex].ingredients.splice(ingredientIndex,1);
  }
  getSelectedRecipe(){
   return this.recipeSelected.asObservable();
  }
  sendSelectedRecipe(recipe:Recipes){
    this.recipeSelected.next(recipe);
  }
  clearSelectedRecipe(){
   this.recipeSelected.next();
  }
}
