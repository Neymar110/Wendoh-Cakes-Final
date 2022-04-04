import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { OrderService } from '../../../shared/services/order-service.service';
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

  ordersBool : boolean = false;
  Username : any = "";
  user :any;
  value : boolean = false;
  styling: string = "white";
  bg_styling: string = "white";
  positioning: string = "static";

  constructor(private auth : AuthService, private orderService : OrderService) {     
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
    this.ifOrders()

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

  ifOrders(){
    let orders = this.orderService.getOrders()
    // console.log(orders);
    // console.log(this.user);    
    
    // if(orders){
    //   this.ordersBool = true;
    // }
  }
}
