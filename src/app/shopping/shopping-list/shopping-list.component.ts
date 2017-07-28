import { Component, OnInit, AfterContentInit } from '@angular/core';
import {Ingredients} from '../../shared/ingredients.model';
import {ShoppingListService} from '../services/shopping-list.service';
import {RecipeService} from '../../recipe-book/services/recipe.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  groceryItem:any;
  constructor(private shoppingList$: ShoppingListService, private recipeService$: RecipeService) { }
  private ingredients: Ingredients[];
  isEdit:any;
  ngOnInit() {
      this.ingredients = this.shoppingList$.getIngredients(); // to get the default ingredients

      this.shoppingList$.shoppingIngredients.subscribe(
      (ingredients:Ingredients[]) => { this.ingredients = ingredients; console.log('default ingredientList::'+this.ingredients);
      }); // to get the ingredients from recipes compoenent
          
      this.shoppingList$.Items.subscribe(
      (ingredientsName:Ingredients) => { 
       console.log("inside subscribe grocery::::: "+ingredientsName);
        this.ingredients.push(ingredientsName);
      });// to get the ingredients added 
  }
  delete(index, ing)
  {
          this.ingredients.splice(index,1);
          console.log('inside delete '+ing);
  }
  edit(index, ing)
  {
    console.log(ing);
    this.isEdit = this.ingredients[index].name;  
  }
}
