import { StorageDataService } from './shared/storage-data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipe-book/recipes/recipes.component';
import { RecipeListComponent } from './recipe-book/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipe-book/recipe-details/recipe-details.component';
import { RecipeEditComponent } from './recipe-book/recipe-edit/recipe-edit.component';

import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping/shopping-list/shopping-edit/shopping-edit.component';

import {routing} from './app.router';
import { NguiOverlayModule } from '@ngui/overlay';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DropdownDirective } from './shared/dropdown.directive';

import {ShoppingListService} from './shopping/services/shopping-list.service';
import {RecipeService} from './recipe-book/services/recipe.service';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './login/signin/signin.component';
import { SignupComponent } from './login/signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    HomeComponent,
    RecipeEditComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    NguiOverlayModule,
    ModalModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [ShoppingListService, RecipeService, StorageDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
