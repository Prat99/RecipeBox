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
 public newItem = {name:'', amount:''};
 isEdit:boolean = false;
 editedItem:Ingredients;
 id:number;
 editItemIndex:number;
 subscription:Subscription;
 @ViewChild('name') name: ElementRef;
 @ViewChild('amount') amount: ElementRef;
 @ViewChild('itemForm') slForm:NgForm;
 constructor(private shoppingList$: ShoppingListService) { }
  ngOnInit() {
    this.subscription = this.shoppingList$.startedEditing.subscribe(
      (index:number)=>{
                       this.editItemIndex=index;
                       this.isEdit=true;
                       this.editedItem=this.shoppingList$.getEditItem(index);
                       this.slForm.setValue({name:this.editedItem.name,amount:this.editedItem.amount});                 
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
    
    this.isEdit=false;
  }
   delete()
  {
     this.shoppingList$.deleteItem(this.editItemIndex);
     this.name.nativeElement.value = '';
     this.amount.nativeElement.value = ''; 
  }
  
}
