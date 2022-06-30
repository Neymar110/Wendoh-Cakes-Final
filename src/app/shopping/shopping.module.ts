import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { AuthGuard } from '../shared/services/auth-guard.service';
import { SharedModule } from '../shared/shared.module';
import { CheckOutComponent } from './components/checkout/checkout.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProductFilterComponent } from './components/menu/product-filter/product-filter.component';
import { UpdatedProductFilterComponent } from './components/menu/updated-product-filter/updated-product-filter.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { ShippingFormComponent } from './components/shipping-form/shipping-form.component';
import { ShoppingCartSummaryComponent } from './components/shopping-cart-summary/shopping-cart-summary.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { MyOrdersModalComponent } from './components/my-orders-modal/my-orders-modal.component';



@NgModule({
  declarations: [
    CheckOutComponent,
    MyOrdersComponent,
    OrderSuccessComponent,
    MenuComponent,
    ShippingFormComponent,
    ShoppingCartComponent,
    ShoppingCartSummaryComponent,
    ProductFilterComponent,
    UpdatedProductFilterComponent,
    MyOrdersModalComponent
],
  imports: [
    SharedModule,
    CoreModule,
    RouterModule.forChild([
      {path : "menu", component:MenuComponent},
      {path : "shopping-cart", component:ShoppingCartComponent},
      {path : "check-out", component:CheckOutComponent, canActivate:[ AuthGuard ]},
      {path : "my/orders", component: MyOrdersComponent, canActivate:[ AuthGuard ]},
      {path : "order-success/:id", component:OrderSuccessComponent, canActivate:[ AuthGuard ]},
    ])
  ],
  exports:[
    ShoppingCartSummaryComponent,
    ProductFilterComponent,
    UpdatedProductFilterComponent,
    MyOrdersModalComponent
  ]
})
export class ShoppingModule { }
