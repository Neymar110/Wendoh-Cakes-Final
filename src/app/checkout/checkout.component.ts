import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'check-out',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckOutComponent implements OnInit { 
  cart$ : any;
  name: any;

  constructor(private shoppingCartService  : ShoppingCartService){}

  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart();
}

}
