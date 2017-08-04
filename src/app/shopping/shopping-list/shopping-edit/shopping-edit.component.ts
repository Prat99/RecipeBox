import { Ingredients } from './../../../shared/ingredients.model';
import { Component, OnInit, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { FormsModule,NgForm } from '@angular/forms';
import {ShoppingListService} from '../../services/shopping-list.service';
import {Subject} from 'rxjs/Subject';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
 newItem:Ingredients = {name:'', amount:null};
 isEdit:boolean = false;
 editedItem:Ingredients;
 id:number;
 editItemIndex:number;
 subscription:Subscription;
 @ViewChild('itemForm') slForm:NgForm;
 constructor(private shoppingList$: ShoppingListService) { }
  ngOnInit() {
    this.subscription = this.shoppingList$.startedEditing.subscribe(
      (index:number)=>{
                       this.editItemIndex=index;
                       this.isEdit=true;
                       this.editedItem=this.shoppingList$.getEditItem(index);
                       //this.slForm.setValue({name:this.editedItem.name,amount:this.editedItem.amount});                 
                       this.newItem = {name:this.editedItem.name, amount:this.editedItem.amount};
      });
  }
  addItem(item)
  {
     if(this.isEdit)
    {
      this.shoppingList$.addEditedIngredient(this.editItemIndex,item);
    }
    else
    this.shoppingList$.addIngredient(item);
    this.clear();
    this.isEdit=false;
  }
   delete()
  {
     this.shoppingList$.deleteItem(this.editItemIndex);
     this.clear(); 
  }
  clear()
  {
    this.slForm.reset();
  }
  
}
