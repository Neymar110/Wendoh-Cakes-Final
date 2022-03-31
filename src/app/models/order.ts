import { ShoppingCart } from "./shopping-cart";

export class Order {
    datePlaced : number;
    items : any;
    shoppingCart : any;
    constructor(public userId : string, public shipping: any, shoppingCartService : ShoppingCart){
        this.datePlaced = new Date().getTime();
        this.shoppingCart = Object.values(shoppingCartService.items)
        // This would then be used below but when this variable is created it's also written to the database.
    //     this.items = this.shoppingCart.map(i => {
    //     return {
    //       product : {
    //         title : i.title,
    //         imageUrl : i.imageUrl,
    //         price : i.price
    //       },
    //         quantity : i.quantity,
    //         totalPrice : i.quantity * i.price
    //     }
    //   }) 
    }
}