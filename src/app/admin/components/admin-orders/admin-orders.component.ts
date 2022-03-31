import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingCart } from '../../../shared/models/shopping-cart';
import { OrderService } from '../../../shared/services/order-service.service';
import { ShoppingCartService } from '../../../shared/services/shopping-cart.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent {

  apple :boolean = false;
  displayOrder:any;
  orders$;
  user$;
  cart$ :Promise<Observable<ShoppingCart>> ;
  constructor(orderService : OrderService, cart : ShoppingCartService){
      this.orders$ = orderService.getOrders().valueChanges()
      this.cart$ = cart.getCart()
    }

    onClick(order?){
      if (order){
        this.displayOrder = order
      }
      this.apple = !this.apple
    }

}
