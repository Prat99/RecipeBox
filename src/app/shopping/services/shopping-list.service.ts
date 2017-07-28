import { Injectable, EventEmitter, OnInit } from '@angular/core';
import {Ingredients} from '../../shared/ingredients.model';
import {RecipeService} from '../../recipe-book/services/recipe.service';
@Injectable()
export class ShoppingListService {
  Items = new EventEmitter<Ingredients>();
  ingredients: Ingredients[] = [new Ingredients('jack fruit',2), new Ingredients('onion',20),
                                         new Ingredients('Bread',5)];
  shoppingIngredients = new EventEmitter<Ingredients[]>();
  constructor(private recService:RecipeService) { }
//  getShoppingListItems()
//  {
//    this.recService.ingredientList.subscribe(
//      (resList)=>{this.shoppingIngredients.push(resList)
//                  console.log('inside the getShoppingListItems'+this.shoppingIngredients);
//      });
//      return this.shoppingIngredients;
//  }
    getIngredients() {
    return this.ingredients.slice();
  }
  addIngredient(ingr:Ingredients)
  {
        this.ingredients.push(ingr);
        this.shoppingIngredients.emit(this.ingredients.slice());
  }
  addIngredientToShopping(ingredients:Ingredients[])
  {
    //  for(let ing of ingredients)
    //  {
    //     console.log('inside ShoppingListService::: '+ing);
    //     this.addIngredient(ing);  
    //  }
        this.ingredients.push(...ingredients);
        this.shoppingIngredients.emit(this.ingredients.slice());
  }
}
