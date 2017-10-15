import { DropdownDirective } from './../shared/dropdown.directive';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import {routing} from './recipes.router';
import { NguiOverlayModule } from '@ngui/overlay';
import { ModalModule } from 'ngx-bootstrap/modal';
import {RecipeDetailsComponent, RecipeEditComponent, RecipeListComponent, RecipesComponent} from './index';

 @NgModule({
     declarations:[RecipeDetailsComponent,
                    RecipeEditComponent,
                    RecipeListComponent,
                    RecipesComponent,
                    DropdownDirective],
        imports:[FormsModule,
                 CommonModule,
                 routing,
                 NguiOverlayModule,
                 ModalModule.forRoot(),
                 ],
        providers:[]
    })
export class RecipesModule { 
}