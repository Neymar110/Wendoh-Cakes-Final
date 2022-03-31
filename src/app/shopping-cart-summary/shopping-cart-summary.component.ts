import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shopping-cart-summary',
  templateUrl: './shopping-cart-summary.component.html',
  styleUrls: ['./shopping-cart-summary.component.css']
})
export class ShoppingCartSummaryComponent {
  @Input('cart') set cartData(data) {
    if(data){
      this.cart = Object.values(data.items) 
      this.cart['totalPrice'] = 0;
      for(let item of this.cart){
        let totalPrice = item.price * item.quantity;
        this.cart['totalPrice'] += totalPrice;
        item['totalPrice'] = totalPrice;
      }
      }
    }  
  cart: any

  get totalItemsCount() {
    let count = 0
    for(let item of this.cart){
      count += item.quantity
    }
    return count
  }
}
