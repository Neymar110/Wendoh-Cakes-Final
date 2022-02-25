import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private db : AngularFireDatabase) { }

  create_product(product : object) {
    // This pushes the object into the firebase database
    return this.db.list("/products").push(product);
  }

  getAll(){
    // Get All Products
    return this.db.list("/products").snapshotChanges();
  }

  getProduct(productId:any){
    // Get specific Product
    return this.db.object("/products/" + productId).valueChanges();
  }
  update(productId:any, product:any){
    return this.db.object("/products/" + productId).update(product);
  }

  delete(productId:any){
    return this.db.object('/products/' + productId).remove();
  }
  
  create_order(shoppingCart){
    return this.db.list('/orders/').push(shoppingCart);
  }
  
}
