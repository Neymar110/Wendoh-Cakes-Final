import { Component, Input } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent{
  @Input('product') product:any;
  @Input('show-actions') showActions : boolean = true;
  @Input('shopping-cart') set shopping_cart(cart: any){
    this.shoppingCart = cart;
  };
  shoppingCart :any;

  constructor(private cartService : ShoppingCartService) {}

    addToCart(){
      this.cartService.addToCart(this.product);
    }

    removeFromCart(){
      this.cartService.removeFromCart(this.product);
    }

    getQuantity(){
      if(!this.shoppingCart) return 0;       
      let item = this.shoppingCart.items[this.product.key];   
      return item ? item.quantity : 0;
    }

}