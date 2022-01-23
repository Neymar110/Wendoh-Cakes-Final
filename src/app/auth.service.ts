import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

import { ActivatedRoute } from '@angular/router';

import { Observable, of } from 'rxjs';
import { UserService } from './user.service';

// import { AppUser } from './models/app-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$ : Observable<any>;

  constructor(private afAuth : AngularFireAuth, private route:ActivatedRoute, private userService : UserService) {
    this.user$ = afAuth.authState;
  } 

  login(){
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    
    this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }
  logout(){
    this.afAuth.signOut();
  }

  get appUser$(): Promise<Observable<any>> {    
    return new Promise((resolve, reject) => {
      let userUID$;

      this.user$.subscribe(user => {
        if (user) {
          userUID$ = user.uid

          if(userUID$){
            resolve(this.userService.get(userUID$).valueChanges());
          }
          else {
            resolve(of(null))
          }
        }
        else {
          resolve(of(null))
        }
      }); 
    })
  }
}
