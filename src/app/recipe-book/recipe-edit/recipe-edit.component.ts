import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RecipeService} from '../services/recipe.service';
import {Recipes} from '../recipe-list/recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id:number;
  isEdit=false;
  editItem:Recipes;
  constructor(private route:ActivatedRoute, private recipeService:RecipeService, private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params)=>{this.id = params['id']}
    );
    this.editItem = this.recipeService.getRecipesById(this.id);
    if(this.editItem)
    {
      this.isEdit=true;
    }
  }
  editItemRecipe(editItem)
  {
     console.log('edit recipe on rcipe page:::'+editItem);
     this.router.navigate(['../'],{relativeTo:this.route});
  }

}
