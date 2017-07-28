import { Component, OnInit, AfterContentInit } from '@angular/core';
import {RecipeService} from '../services/recipe.service';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent{
 public recipeData;
 public sendData;
 constructor(){}
}
