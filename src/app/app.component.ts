import { Component } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private userService: UserService, private auth : AuthService, router : Router) {
    auth.user$.subscribe(user => {
      if(!user) return;

      this.userService.save(user);

      let returnUrl: string | UrlTree = localStorage.getItem('returnUrl') as string;
      if(!returnUrl) return;
      
      localStorage.removeItem("returnUrl");
      router.navigateByUrl(returnUrl);
    })
  };
}
