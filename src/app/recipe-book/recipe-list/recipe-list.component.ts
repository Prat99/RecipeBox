import { StorageDataService } from './../../shared/storage-data.service';
import { Ingredients } from './../../shared/ingredients.model';
import { Component, OnInit, Output, EventEmitter, Input, ViewChild, ElementRef } from '@angular/core';
import { Recipes } from './recipe.model';
import {RecipeService} from '../services/recipe.service';
import {ActivatedRoute} from '@angular/router';
import {Response} from '@angular/http';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  public isNewRecipe:boolean = false;
  public recipes:Recipes[] = [];
  public recipe:Recipes[]=[];
  public newItem:Recipes = {name:'',imagePath:'',text:'',ingredients:[]};
  ingredients:Ingredients = {name:'',amount:null};
  ingredientsAll:Ingredients[]=[];
  isIngredients:boolean;
  selectedRecipe:Recipes;
  @ViewChild('name') name:ElementRef;
  @ViewChild('amount') amount:ElementRef;

  constructor(private recipeService$: RecipeService,
              private route:ActivatedRoute,
              private firebaseService:StorageDataService) { }

  ngOnInit(){
   this.loadAll();
  }
  loadAll() {
      this.firebaseService.getRecipes().subscribe(  
      (data)=>{
        // this.onSuccess(data);
        this.recipes = data;
        console.log("data from json response"+JSON.stringify(data));
       },
      (error)=>{console.log("if there is some error "+error);
      });
  //   for(var i=0; i<this.recipe.length; i++)
  //   {
  //     this.recipes.push(this.recipe[i]);
  //   }
  //   this.recipes = this.recipe;
  //      console.log("on load method: "+this.recipes);
    }
    onSuccess(data)
    {
       if(data)
        for(var i=0; i<data.length; i++)
         {
           this.recipes.push(data[i]);
          }  
     // this.recipes = this.recipeService$.getRecipes();
     console.log("firebase recipes "+this.recipes);
     }

   viewDetails(index:number){
     this.selectedRecipe = this.recipeService$.getRecipesById(index);
    // console.log("selected recipe::"+this.selectedRecipe);
    // this.recipeService$.recipeSelected.next(this.selectedRecipe);
    this.recipeService$.sendSelectedRecipe(this.selectedRecipe);
   }
   addRecipe()  
   {
      this.isNewRecipe = !this.isNewRecipe;
   }
   newRecipe(newRecipeItem:Recipes, ingredients:Ingredients)
  {    
       const newRecipe = new Recipes(newRecipeItem.name,newRecipeItem.text,newRecipeItem.imagePath,ingredients);
       console.log("full and final recipe "+JSON.stringify(newRecipe));
      // this.recipe.push(newRecipe);
        this.firebaseService.saveRecipes(newRecipe).subscribe(
          (res)=>{console.log("new recipe at firebase "+res)},
          (error)=>{console.log(error)}
        );
     
         // this.recipeService$.setRecipe(newRecipe);
         // console.log(":::::"+this.newItem.name);
        // console.log("complete recipe object::"+this.newItem.name,this.newItem.text,this.newItem.imagePath,this.ingredientsAll);
       // this.recipes = this.recipeService$.getRecipes();
        this.newItem = {name:'',text:'',imagePath:'',ingredients:[]};
        this.clearIngredietsArray();
   }
   onIngredientsAdd(ingredients){
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
