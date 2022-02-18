import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate{

  constructor(private auth : AuthService, private userService : UserService) { }

  canActivate(route:any, state:RouterStateSnapshot):Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
    
    return new Promise((resolve, reject) => {
      this.auth.user$.subscribe(user => {
        if (user){
          let appUser = this.userService.get(user.uid).snapshotChanges()
          appUser.subscribe(x => {
            let data = x.payload.val();
            if (data) {
              resolve(data.isAdmin);
            }  
            else {
              resolve(false);
            }
          })
        }
      })
  })
  
}

}



