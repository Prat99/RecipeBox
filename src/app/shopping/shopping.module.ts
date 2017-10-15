import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { NgModule } from '@angular/core';
import { routing } from './shopping.router';


@NgModule({
    declarations:[ShoppingEditComponent,
                  ShoppingListComponent],
    imports:[CommonModule, FormsModule, routing],
    providers:[]
})
export class ShoppingModule{}