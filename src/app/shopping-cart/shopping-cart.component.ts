import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ShoppingCart } from '../models/shopping-cart';
import { ShoppingCartService } from '../shopping-cart.service';
import { ProductService } from '../product.service';
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

  constructor(private shoppingCartService : ShoppingCartService, private productService : ProductService) { }

  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart();
    this.getCart()
  }

  async getCart() {    
    this.cartSubscription = this.cart$.subscribe(data => {
      // console.log(Object.values(data.items))
      this.cart = data
      this.displayCart = Object.values(data.items);
      this.displayCart['totalPrice'] = 0;
      for(let item of this.displayCart){
        let totalPrice = item.product.price * item.quantity;
        this.displayCart['totalPrice'] += totalPrice;
        item['totalPrice'] = totalPrice
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

  create_order(){
    this.cartSubscription.unsubscribe();
    this.productService.create_order(this.displayCart);
    let cartId = localStorage.getItem("cartId");
    this.shoppingCartService.delete_shopping_cart(cartId)
    console.log("Order created and shopping cart deleted.")
  }
}
