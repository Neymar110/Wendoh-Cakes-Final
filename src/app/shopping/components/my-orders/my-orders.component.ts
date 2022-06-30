import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Order } from 'shared/models/order';
import { AuthService } from 'shared/services/auth.service';
import { OrderService } from 'shared/services/order-service.service';

@Component({
  selector: 'my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent {
  isActive:boolean = false;
  orders$;
  user$;
  userSubscription:Subscription
  sub:any;
  displayOrder: Order

  constructor(
    private authService : AuthService,
    private orderService : OrderService){

      this.orders$ = authService.user$.pipe(switchMap(u => orderService.getOrdersByUser(u.uid).valueChanges()));
    }

    isActiveFunction(order?: Order){
      this.isActive = !this.isActive
      if(order) this.displayOrder = order
    }
}

