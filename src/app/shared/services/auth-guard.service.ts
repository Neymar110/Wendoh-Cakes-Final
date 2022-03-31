import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth : AuthService, private router : Router) { }

  canActivate(route:any, state:RouterStateSnapshot):Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
    
    return new Promise((resolve, reject) => {
      this.auth.user$.subscribe(user => {
        if (user) {
          resolve(true);
        }
  
        else {
          this.router.navigate(['/login'], { queryParams:{ returnUrl: state.url } });
          resolve(false);}
      });
  })
}
}