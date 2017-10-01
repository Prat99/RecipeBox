import { Recipes } from './../recipe-book/recipe-list/recipe.model';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import {Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class StorageDataService {
   baseUrl:string;
   recipes:FirebaseListObservable<Recipes[]>;

  constructor(private http:Http, private af:AngularFireDatabase) {
   this.baseUrl = 'https://recipebox-1b77a.firebaseio.com/';
   }
    saveRecipes(recipes)
    {
      let headers = new Headers({'content-Type':'application/json'});
      return this.http.post(this.baseUrl+'recipes.json',recipes,{headers:headers});
    }
   getRecipes()
   {
    //  return this.http.get(`${this.baseUrl}recipes.json`)
    //    .map((response: Response) => response.json());
     this.recipes = this.af.list('/recipes') as FirebaseListObservable<Recipes[]>;
     return this.recipes;

   } 
}
