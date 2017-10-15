import {Ingredients} from '../../shared/ingredients.model';

export class Recipes{
    name:string;
    text:string;
    imagePath:string;
    ingredients?: Ingredients[];
 constructor(name, text, imagePath, ingredients)
    {
       this.name = name;
       this.text = text;
       this.imagePath = imagePath;
       this.ingredients = ingredients;
    }
}