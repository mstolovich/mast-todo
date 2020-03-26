import { Injectable } from '@angular/core';
import { 
  CanActivate, CanActivateChild, 
  ActivatedRouteSnapshot, RouterStateSnapshot, 
  Router, NavigationExtras } from '@angular/router';

import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      
      let url: string = state.url;
      return this.checkLogin(url);
  }
  
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      return this.canActivate(route, state);
    }
  
  checkLogin(url: string): boolean {
    if (this.authService.isLoggedIn) { return true }

    this.authService.redirectUrl = url;

    // let navigationExtras: NavigationExtras = {
    //   queryParams: { 'session_id': 333333 },
    //   fragment: 'anchor'
    // }

    this.router.navigate(['/login'], 
    //navigationExtras
    );
    return false;
  }
}

