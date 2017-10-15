import { CanActivateViaAuthGuard } from './../login/guards/auth-guard.service';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import {Routes, RouterModule} from '@angular/router';


const routes:Routes = [
   { path: '', component:ShoppingListComponent}
];

export  const routing = RouterModule.forChild(routes);