import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingCart } from '../models/shopping-cart';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  cart$:Observable<ShoppingCart>;
  cart: any

  constructor(private shoppingCartService : ShoppingCartService) { }

  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart();
    this.getCart()
  }

  async getCart() {
    // this.cart$ = await this.shoppingCartService.getCart()
    
    this.cart$.subscribe(data => {
      this.cart = Object.values(data.items);
    })
  }

  get totalItemsCount() {
    let count = 0
    for(let item of this.cart){
      count += item.quantity
    }
    return count
  }
}
