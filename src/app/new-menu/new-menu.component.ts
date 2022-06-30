import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from '../shared/models/product';
import { ShoppingCart } from '../shared/models/shopping-cart';
import { ProductService } from '../shared/services/product.service';
import { ShoppingCartService } from '../shared/services/shopping-cart.service';

@Component({
  selector: 'new-menu',
  templateUrl: './new-menu.component.html',
  styleUrls: ['./new-menu.component.css']
})
export class NewMenuComponent implements OnInit {
  products$:Product[] = [];
  filteredProducts : any;
  category : string | null;
  cart : ShoppingCart;
  subscription : Subscription;

  constructor(
    route : ActivatedRoute, 
    productService : ProductService, 
    private shoppingCartService : ShoppingCartService
    ){
    
    productService.getAll().subscribe(data => {
      this.products$ = data.map(values => {
        return {
          key: values.key,
          ...values.payload.val() as Product
        }
      })

      route.queryParamMap.subscribe(params => {
        this.category = params.get("category");
        this.filteredProducts = (this.category) ? 
          this.products$.filter(p => p.category === this.category) : this.filteredProducts = this.products$;
        });
      
    })
  }

  async ngOnInit(){
    this.subscription = (await this.shoppingCartService.getCart())
    .subscribe(cart => {
      this.cart = cart
    })
  }

}
