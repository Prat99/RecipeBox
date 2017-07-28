import { Component, OnInit, Input, AfterContentInit} from '@angular/core';
import {RecipeService} from '../services/recipe.service';
import {ShoppingListService} from '../../shopping/services/shopping-list.service';


@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
 public detailView:boolean = false;
 public recipeDetails;
  constructor(private recipeService$: RecipeService, private shpService$:ShoppingListService) { }
  ngOnInit()
  {
      this.recipeService$.recipeSelected.subscribe(
      (recipes) => {
                    console.log('inside recipe details!!!!!!!!!::: '+recipes.name);
                    this.recipeDetails = recipes; 
                    this.detailView = true;
      },
      (error)=>{console.log(error);},
      ()=>{ console.log('complete call back:::: ');
    }); 
    
  }
  addToShoppingList()
  {
  //  this.recipeService$.ingredientList.emit('shoppingList item');
  //  console.log('add to addToShoppingList clicked::: '+this.recipeDetails.ingredients);
      this.shpService$.addIngredientToShopping(this.recipeDetails.ingredients);
  }
}
