import { Component, OnInit, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ShoppingListService} from '../../services/shopping-list.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
 public newItem = {name:'', amount:''};
 public allItems = [];
 @ViewChild('name') name: ElementRef;
 @ViewChild('amount') amount: ElementRef;
 constructor(private shoppingList$: ShoppingListService) { }
  ngOnInit() {
  }
  addItem(item)
  {
    this.shoppingList$.Items.emit(item);
    console.log("inside ShoppingEditComponent "+item.name); 
    console.log("inside ShoppingEditComponent "+item.amount);    
    this.name.nativeElement.value = '';
    this.amount.nativeElement.value = ''; 
  }
}
