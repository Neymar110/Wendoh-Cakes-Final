import { Component } from '@angular/core';
import { AuthService } from 'shared/services/auth.service';

@Component({
  selector: 'new-nav',
  templateUrl: './new-nav.component.html',
  styleUrls: ['./new-nav.component.css']
})
export class NewNavComponent {

  clicked : boolean = false;
  user : any;

  constructor(private auth : AuthService) {
    auth.appUser$.then(dataObservable => {
      dataObservable?.subscribe(data => {
        this.user = data;
      })
    })
  }

  onClick(){
    this.clicked = !this.clicked;   
  }

  logout(){
    this.onClick()
    this.auth.logout();
    this.user = null;
  }
}
