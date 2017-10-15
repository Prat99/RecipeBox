import { LoginService } from './../login.service';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Route } from '@angular/router';


@Injectable()
export class CanActivateViaAuthGuard implements CanActivate { // implementing canActivate interface

  constructor(private authService: LoginService) {}

  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated();
  }
}
// class Permissions {
//   constructor(private authService:LoginService){}
//   canLoadChildren(): boolean {
//     return this.authService.isAuthenticated();
  
//   }
// }
// export class CanActivateChild implements CanLoad{

//   constructor(private authService:LoginService, private permissions:Permissions){}

//   canLoad(route: Route):Observable<boolean> | Promise<boolean> | boolean{
//     return this.permissions.canLoadChildren();
//   }

//}

export class UserToken {}
export class Permissions {
 // constructor(private authService:LoginService){}
  canLoadChildren(user: UserToken, id): boolean {
   // return this.authService.isAuthenticated();
   return true;
  }
}
 
@Injectable()
export class CanLoadTeamSection implements CanLoad {
  constructor(private permissions: Permissions, private currentUser: UserToken) {}
 
  canLoad(route: Route): Observable<boolean>|Promise<boolean>|boolean {
    return this.permissions.canLoadChildren(this.currentUser, route);
  }
}