import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  // Color === true | White
  // Color === false | Black
  @Input("color") decidedColor : any;
  @Input("displayType") Position : any;

  Username : any = "";
  user :any;
  value : boolean = false;
  styling: string = "white";
  positioning: string = "static";

  constructor(private auth : AuthService) {     
    auth.appUser$.then(dataObservable => {
      dataObservable?.subscribe(data => {
        this.user = data;
        this.Username = data?.name;
      })
    })
    
  }

  logout(){
    this.auth.logout();
    this.user = null;
  }

  ngOnInit() {
    this.colorPicker()
  }

  colorPicker(){
    if (this.decidedColor == true){
      this.styling = "white"
      this.positioning = "fixed"
    }
    else {
      this.styling = "black"
    }
  }
  onClick() {
    this.value = !this.value
  }

  
}

