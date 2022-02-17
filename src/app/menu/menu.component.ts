import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../models/product';
import { ActivatedRoute } from '@angular/router';
import { ShoppingCartService } from '../shopping-cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy{
  products$:Product[] = [];
  filteredProducts : any;
  category : string | null;
  cart : any;
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
      // console.log('DB cart is:', cart, 'and this.cart is: ', this.cart);
    })
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

