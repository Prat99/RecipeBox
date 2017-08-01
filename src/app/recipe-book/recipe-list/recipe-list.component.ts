import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
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
  public newItem:any = {name:'',imagePath:'',text:''};
  constructor(private recipeService$: RecipeService, private route:ActivatedRoute) { }

  ngOnInit() 
  {
    this.recipes = this.recipeService$.getRecipes();
  }
   viewDetails(recipe)
   {
    this.recipeService$.recipeSelected.emit(recipe);
    console.log("inside recipe-list:::: "+recipe.name);
   }
   addRecipe()  
   {
      this.isNewRecipe = !this.isNewRecipe;
   }
   newRecipe(freshItem)
   {
        this.recipes.push(freshItem);
        this.newItem = {name:'',text:'',imagePath:'', ingredients:[]};
   }

}
