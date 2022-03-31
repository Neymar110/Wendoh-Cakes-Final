import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';
import { Order } from '../models/order';
import { OrderService } from '../order-service.service'; 

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit, OnDestroy{
  @Input('cart') cart : any;

  shipping = {
    name: "",
    phoneNumber: "",
    email: "",
    city: "",
  };

  userId : string;
  userSubscription : Subscription;
  
  constructor(
    private router : Router,
    private orderService : OrderService,
    private authService : AuthService){
    }
  


  async placeOrder() {
    let order = new Order(this.userId, this.shipping, this.cart);
    let result = await this.orderService.placeOrder(order);
    this.router.navigate(["order-success", result.key])
  }

  ngOnInit() {
    this.userSubscription = this.authService.user$.subscribe(user => this.userId = user.uid)
  }

  ngOnDestroy(){
    this.userSubscription.unsubscribe();
  }
}
