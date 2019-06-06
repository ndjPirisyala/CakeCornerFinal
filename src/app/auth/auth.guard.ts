import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate  } from '@angular/router';
import { UserService } from "../user/user.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userService : UserService,private router : Router){}
 
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (!this.userService.isLoggedIn()) {
        this.router.navigateByUrl('/login');
        this.userService.deleteToken();
        return false;
      }
    return true;
  }
  
}
