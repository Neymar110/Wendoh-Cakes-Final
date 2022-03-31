import { Component, Input } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent{
  @Input('product') set prod(prod){
    this.product = prod
  };

  product: any
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
