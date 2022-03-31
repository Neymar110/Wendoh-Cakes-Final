import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AuthService } from '../auth.service';
import { OrderService } from '../order-service.service';

@Component({
  selector: 'my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent {

  orders$;
  user$;
  userSubscription:Subscription
  sub:any;

  constructor(
    private authService : AuthService,
    private orderService : OrderService){

      this.orders$ = authService.user$.pipe(switchMap(u => orderService.getOrdersByUser(u.uid).valueChanges()));
    }
}
