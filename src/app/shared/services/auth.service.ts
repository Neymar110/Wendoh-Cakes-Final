import { Injectable, OnInit } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

import { ActivatedRoute, Router } from '@angular/router';

import { Observable, of } from 'rxjs';

import { UserService } from './user.service';
import { AppUser } from '../models/app-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {
  user$: Observable<any>;

  constructor(private afAuth: AngularFireAuth, private route: ActivatedRoute, private userService: UserService, private router: Router) {
    this.user$ = afAuth.authState;
  }
  ngOnInit(): void {
    this.afAuth.onAuthStateChanged(user => {
      if (user) {
        let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
        console.log(returnUrl);

        this.router.navigate([returnUrl])
      }
    })
  }



  login_with_google() {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/home';
    // console.log(this.route.snapshot.queryParamMap.keys)
    localStorage.setItem('returnUrl', returnUrl);


    this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  login_with_email_and_password(email:string, password:string):Promise<any>{
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }
  logout() {
    this.afAuth.signOut();
  }

  get appUser$(): Promise<Observable<AppUser | null> | null> {
    return new Promise((resolve, reject) => {
      let userUID$;

      this.user$.subscribe(user => {
        if (user) {
          userUID$ = user.uid

          if (userUID$) {
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
