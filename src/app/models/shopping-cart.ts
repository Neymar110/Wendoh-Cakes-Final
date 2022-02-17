import { ShoppingCartItem } from "./shopping-cart-item";

export class ShoppingCart{
  items: ShoppingCartItem[] = [];
    constructor(public itemsMap : { [productId : string]: ShoppingCartItem }) {
      for (let productId in itemsMap){
        this.items.push(itemsMap[productId])
      }
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