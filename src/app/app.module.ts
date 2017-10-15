
import { LoginService } from './login/login.service';
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
import { loginModule } from './login/login.module';

import {routing} from './app.router';

import {ShoppingListService} from './shopping/services/shopping-list.service';
import {RecipeService} from './recipe-book/services/recipe.service';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import {canDeactivateGuard} from './recipe-book/recipe-list/guard/candeactivateguard.service';
import {CanActivateViaAuthGuard, CanLoadTeamSection, Permissions, UserToken} from './login/guards/auth-guard.service';
import { WelcomeComponent } from './welcome/welcome.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PagenotfoundComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    loginModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [ShoppingListService, RecipeService,
              StorageDataService, LoginService, canDeactivateGuard, CanActivateViaAuthGuard,
               CanLoadTeamSection, Permissions, UserToken],
  bootstrap: [AppComponent]
})
export class AppModule { }
