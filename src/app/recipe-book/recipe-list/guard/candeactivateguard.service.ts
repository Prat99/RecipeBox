import { Observable } from 'rxjs/Observable';
import {CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export interface canComponentDeactivate{
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
    //canDeactivate():Observable<boolean> | Promise<boolean> | boolean
}

export class canDeactivateGuard implements CanDeactivate<canComponentDeactivate>{

   canDeactivate(component:canComponentDeactivate, currentRoute: ActivatedRouteSnapshot,
    currentState:RouterStateSnapshot, nextState:RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean{
     return component.canDeactivate();
   }
 
}