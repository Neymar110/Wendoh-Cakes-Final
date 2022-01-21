import { Component } from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  recomandation : string = "Caramel Cake"; 

  menuItems =[
    {
      title: "Doughnuts",
      description: "Lorem Ipsum sit amet dolor",
      price: 500,
      img: "../../assets/food_imgs/doughnut.jpg"
    },
    {
      title: "Croissant",
      description: "Lorem Ipsum sit amet dolor",
      price: 500,
      img: "../../assets/food_imgs/croissant.jpg"
    },
    {
      title: "Macarons",
      description: "Lorem Ipsum sit amet dolor",
      price: 500,
      img: "../../assets/food_imgs/macaroons.jpg"
    },
    {
      title: "Cheesecake",
      description: "Lorem Ipsum sit amet dolor",
      price: 500,
      img: "../../assets/food_imgs/Location BG.jpg"
    },
    {
      title: "Puff Pastries",
      description: "Puff pastry, also known as pâte feuilletée, is a flaky light pastry made from...",
      price: 500,
      img: "../../assets/food_imgs/Ball_pastry.jpg"
    },
    {
      title: "Apple Pie",
      description: "This pie tastes almost like cider in pie form. It's not tart at all but isn't overpoweringly sweet...",
      price: 500,
      img: "../../assets/food_imgs/Apple_pie.jpg"
    },
    {
      title: "Caramel Cake",
      description: "Caramel Cake",
      price: 500,
      img: "../../assets/food_imgs/caramel cake.jpg"
    },
    {
      title : "Mint Cupcakes",
      description : "Mint cupcakes!",
      price : 500,
      img : "../../assets/food_imgs/cupcakes.jpg"
    },
    {
      title : "Chocolate Cake",
      description : "Chocolate Cake",
      price : 500,
      img : "../../assets/food_imgs/Chocolate Cake.jpg"

    }   
  ]

}
