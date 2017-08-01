import { Component, OnInit, Input, AfterContentInit} from '@angular/core';
import {RecipeService} from '../services/recipe.service';
import {ShoppingListService} from '../../shopping/services/shopping-list.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
 public detailView:boolean = false;
 public recipeDetails;
 id:number;
  constructor(private recipeService$: RecipeService, private shpService$:ShoppingListService, private route:ActivatedRoute) { }
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
    this.route.params.subscribe(
      (params) => {this.id=params['id']}
    );
    this.recipeDetails = this.recipeService$.getRecipesById(this.id);
    if(this.recipeDetails)
    {
      this.detailView = true;
    }
   
    
  }
  addToShoppingList()
  {
      this.shpService$.addIngredientToShopping(this.recipeDetails.ingredients);
  }
}
