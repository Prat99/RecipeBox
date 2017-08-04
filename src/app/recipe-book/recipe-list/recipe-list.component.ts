import { Ingredients } from './../../shared/ingredients.model';
import { Component, OnInit, Output, EventEmitter, Input, ViewChild, ElementRef } from '@angular/core';
import { Recipes } from './recipe.model';
import {RecipeService} from '../services/recipe.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  public isNewRecipe:boolean = false;
  public recipes:Recipes[] = [];
  public newItem:Recipes = {name:'',imagePath:'',text:'',ingredients:[]};
  ingredients:Ingredients = {name:'',amount:null};
  ingredientsAll:Ingredients[]=[];
  isIngredients:boolean;
  selectedRecipe:Recipes;
  @ViewChild('name') name:ElementRef;
  @ViewChild('amount') amount:ElementRef;
  constructor(private recipeService$: RecipeService, private route:ActivatedRoute) { }

  ngOnInit() 
  {
    this.recipes = this.recipeService$.getRecipes();

  }
   viewDetails(index:number)
   {
    this.selectedRecipe = this.recipeService$.getRecipesById(index);
    console.log("selected recipe::"+this.selectedRecipe);
    this.recipeService$.recipeSelected.next(this.selectedRecipe);
   }
   addRecipe()  
   {
      this.isNewRecipe = !this.isNewRecipe;

   }
   newRecipe(newRecipeItem:Recipes)
  {    
        const newRecipe = new Recipes(this.newItem.name,this.newItem.text,this.newItem.imagePath,this.ingredientsAll);
        this.recipeService$.setRecipe(newRecipe);
        console.log(":::::"+this.newItem.name);
        console.log("complete recipe object::"+this.newItem.name,this.newItem.text,this.newItem.imagePath,this.ingredientsAll);
        this.recipes = this.recipeService$.getRecipes();
        this.newItem = {name:'',text:'',imagePath:'', ingredients:[]};
        this.clearIngredietsArray();
   }
   onIngredientsAdd(ingredients)
   {
     console.log(ingredients);
     this.isIngredients=true;
     this.ingredientsAll.push(ingredients);
     this.ingredients = {name:'',amount:null};
     this.name.nativeElement.value = '';
     this.amount.nativeElement.value = '';
   }
   deleteIngredient(index)
   {
     this.ingredientsAll.splice(index,1);
   }
   clearIngredietsArray()
   {
      this.ingredientsAll = [];
   }

}
