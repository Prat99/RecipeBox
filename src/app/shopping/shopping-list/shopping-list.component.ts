import { Component, OnInit, AfterContentInit } from '@angular/core';
import {Ingredients} from '../../shared/ingredients.model';
import {ShoppingListService} from '../services/shopping-list.service';
import {RecipeService} from '../../recipe-book/services/recipe.service';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  groceryItem:any;
  id:number;
  ingredients: Ingredients[];
 
  constructor(private shoppingList$: ShoppingListService, private recipeService$: RecipeService) { }
  isEdit:boolean;
  ngOnInit() {
      this.ingredients = this.shoppingList$.getIngredients(); // to get the default ingredients
      this.shoppingList$.shoppingIngredients.subscribe(
      (ingredients:Ingredients[]) => { this.ingredients = ingredients; console.log('default ingredientList::'+this.ingredients);
      }); // to get the ingredients from recipes component
  }
    addItemToEdit(index)
    {
       this.shoppingList$.startedEditing.next(index);
    }
}
