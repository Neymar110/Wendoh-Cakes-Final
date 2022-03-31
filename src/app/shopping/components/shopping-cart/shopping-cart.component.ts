import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ShoppingCart } from '../../../shared/models/shopping-cart';
import { ShoppingCartService } from '../../../shared/services/shopping-cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  cart$:Observable<ShoppingCart>;
  cartSubscription: Subscription;
  displayCart: any
  cart: any

  constructor(private shoppingCartService : ShoppingCartService, private router: Router) { }

  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart();
    this.getCart()
  }

  async getCart() {    
    this.cartSubscription = this.cart$.subscribe(data => {
      if (data){
        this.cart = data
        this.displayCart = Object.values(data.items);
        let keyArray = Object.keys(data.items);
        let index = 0
        
        this.displayCart['totalPrice'] = 0;
        for(let item of this.displayCart){
          
          let totalPrice = item.price * item.quantity;
          
          this.displayCart['totalPrice'] += totalPrice;
          item['totalPrice'] = totalPrice
          item['key'] = keyArray[index];
          index++;
        }
      }
      else{
        this.displayCart = []
      }
    })
  }

  get totalItemsCount() {
    let count = 0
    for(let item of this.displayCart){
      count += item.quantity
    }
    return count
  }


  clearCart(){
    this.shoppingCartService.clearCart();
  }
}
