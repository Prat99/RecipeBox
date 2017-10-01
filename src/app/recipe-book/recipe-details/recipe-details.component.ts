import { Recipes } from './../recipe-list/recipe.model';
import { Component, OnInit, Input, AfterContentInit} from '@angular/core';
import {RecipeService} from '../services/recipe.service';
import {ShoppingListService} from '../../shopping/services/shopping-list.service';
import {ActivatedRoute} from '@angular/router';
import { StorageDataService } from './../../shared/storage-data.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
 public detailView:boolean = false;
 public showDetails:boolean = false;
 public allRecipes:Recipes[];
 public recipeDetails:Recipes;
 id:number;
  constructor(private recipeService$: RecipeService,
              private shpService$:ShoppingListService,
              private route:ActivatedRoute,
              private firebaseStorage:StorageDataService) { }
  ngOnInit()
  {
    //   this.recipeService$.recipeSelected.subscribe(
    //   (recipes) => {
    //                 console.log('inside recipe details!!!!!!!!!::: '+recipes.name);
    //                 this.recipeDetails = recipes; 
    //                 this.detailView = true;
    //   },
    //   (error)=>{console.log(error);},
    //   ()=>{ console.log('complete call back:::: ');
    // }); 
    this.route.params.subscribe(
      (params) => {this.id=params['id']}
    );
    //this.recipeDetails = this.recipeService$.getRecipesById(this.id);
    //  this.firebaseStorage.getRecipes().subscribe((data)=>{this.allRecipes=data;})
    //  this.recipeDetails = this.allRecipes[this.id];
     this.recipeService$.getSelectedRecipe().subscribe(
       (data)=>{
                this.recipeDetails=data;
                console.log("selected recipe "+JSON.stringify(this.recipeDetails));
                this.showDetails = true;
              }
     );
     console.log('state of recipeDetails '+this.recipeDetails);
    if(this.id) {
      this.detailView = true;
    }  
    // if(this.recipeDetails){
    //   this.showDetails = !this.showDetails;
    // }
  }
  addToShoppingList()
  {
      this.shpService$.addIngredientToShopping(this.recipeDetails.ingredients);
  }
}
