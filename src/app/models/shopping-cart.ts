import { Product } from "./product";
import { ShoppingCartItem } from "./shopping-cart-item";

export class ShoppingCart{
  items: ShoppingCartItem[] = [];
    constructor(public itemsMap : { [productId : string]: ShoppingCartItem }) {
      for (let productId in itemsMap){
        let item =  itemsMap[productId];
        console.log(item);
        
        this.items.push(new ShoppingCartItem(item.product, item.quantity))
      }
    }

    getQuantity(product: Product){
      let item = this.itemsMap[product.$key];   
      return item ? item.quantity : 0;
    }
    
    get totalItemsCount() {
        let count = 0;
        console.log(this.itemsMap)
        for (let productId in this.itemsMap){
          count += this.itemsMap[productId].quantity
        }
          
        
        console.log(count);
        
        return count;
    }

}