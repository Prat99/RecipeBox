import { Injectable, EventEmitter, OnInit } from '@angular/core';
import {Ingredients} from '../../shared/ingredients.model';
import {RecipeService} from '../../recipe-book/services/recipe.service';
import {Subject} from 'rxjs/Subject';
@Injectable()
export class ShoppingListService {
  Items = new EventEmitter<Ingredients>();
  item:Ingredients;
  startedEditing = new Subject<number>();
  ingredients: Ingredients[] = [new Ingredients('jack fruit',2), new Ingredients('onion',20),new Ingredients('Bread',5)];
  shoppingIngredients = new Subject<Ingredients[]>();
  constructor(private recService:RecipeService) { }
  getIngredients() {
    return this.ingredients;
  }
  addIngredient(ingr:Ingredients)
  {
        this.ingredients.push(ingr);
        this.shoppingIngredients.next(this.ingredients.slice());
  }
  addIngredientToShopping(ingredients:Ingredients[])
  {
        this.ingredients.push(...ingredients);// spread operator changes array to list type objects
        this.shoppingIngredients.next(this.ingredients.slice());
  }
  addEditedIngredient(index, newIngredient)
  {
      this.ingredients[index] = newIngredient;
      this.shoppingIngredients.next(this.ingredients.slice());
  }
  getEditItem(index:number)
  {
   return this.ingredients[index];
  }
  deleteItem(index)
  {
    this.ingredients.splice(index,1);
    this.shoppingIngredients.next(this.ingredients.slice());
  }
}
