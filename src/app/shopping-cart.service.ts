import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { ShoppingCart } from './models/shopping-cart';
@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private db : AngularFireDatabase, private router : Router) { }

  private create(){
    console.log(" new Date().getTime()");
    
    return this.db.list("/shopping-carts").push({
      // dateCreated : new Date().getTime()
      date: "date"
    });
  }
  
  async getCart(): Promise<Observable<ShoppingCart>>{
    let cartId = await this.getOrCreateCartId();
    let cart = this.db.object("/shopping-carts/" + cartId);

    return cart.valueChanges()
    .pipe(map(x => {      
      let newX = x as ShoppingCart      
      return newX
    }))
  }

  private getItem(cartId : string, productId : string) {
    return this.db.object("/shopping-carts/" + cartId + "/items/" + productId);
  }

  private async getOrCreateCartId() : Promise<string> {
    let cartId = localStorage.getItem("cartId");
    
    if (cartId) return cartId;
    
    let result = await this.create();
    localStorage.setItem("cartId", result.key as string);
    return result.key as string;
  }

  async addToCart (product:any ){
    this.updateItemQuantity(product, 1);
  }

  async removeFromCart(product : any){
    this.updateItemQuantity(product, -1);
  }

  private async updateItemQuantity(product : any, change:number){
    let cartId = await this.getOrCreateCartId()
    let item$ = this.getItem(cartId, product.key)
    let itemData$:Observable<any> = item$.valueChanges().pipe(take(1))
    itemData$.subscribe(item => {
      item$.update({ product : product, quantity : (item?.quantity || 0) + change });  
    })
  }

  delete_shopping_cart(cartId){
    let cart = this.db.object("/shopping-carts/" + cartId);
    this.router.navigate(["/menu"])
    return cart.remove();
  }
}
