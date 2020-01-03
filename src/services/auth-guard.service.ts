import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
//import { AuthService } from './auth.service';
@Injectable()
export class AuthGuardService implements CanActivate {
  constructor( public router: Router) {}
  canActivate(next:ActivatedRouteSnapshot,state:RouterStateSnapshot): boolean {
    if (localStorage.getItem('userToken')!=null)
    return true;
    this.router.navigate(['Home']);
    return false;
    
    
  }
}