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
          // console.log('user logged in redirect');
          resolve(true);
        }
  
        else {
          // console.log('not logged in redirect');
          
          this.router.navigate(['/login'], );
          resolve(false);}
      });
  })
}
}