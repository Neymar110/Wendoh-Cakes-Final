import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './core/components/about-me/about-me.component';
import { AdminAuthGuard } from './admin/services/admin-auth-guard.service';
import { AdminOrdersComponent } from './admin/components/admin-orders/admin-orders.component';
import { AuthGuard } from './shared/services/auth-guard.service';
import { CheckOutComponent } from './shopping/components/checkout/checkout.component';
import { HomeComponent } from './core/components/home/home.component';
import { LoginComponent } from './core/components/login/login.component';
import { MenuComponent } from './shopping/components/menu/menu.component';
import { MyOrdersComponent } from './shopping/components/my-orders/my-orders.component';
import { NewProductFormComponent } from './admin/components/new-product-form/new-product-form.component';
import { ShoppingCartComponent } from './shopping/components/shopping-cart/shopping-cart.component';
import { OrderSuccessComponent } from './shopping/components/order-success/order-success.component';

const routes: Routes = [
  {path : "", redirectTo:"home", pathMatch:"full"},
  {path : "shopping-cart", component:ShoppingCartComponent},
  {path : "home", component : HomeComponent},
  {path : "menu", component : MenuComponent},
  {path : "about-me", component : AboutMeComponent},
  {path : "login", component : LoginComponent},
  {path : "logout", component: LoginComponent},
  {path : "check-out", component:CheckOutComponent, canActivate:[ AuthGuard ]},
  {path : "new-product", component : NewProductFormComponent, canActivate:[AuthGuard, AdminAuthGuard]},
  { path : "my/orders", component :  MyOrdersComponent, canActivate:[AuthGuard]},
  { path : "admin/orders", component :  AdminOrdersComponent, canActivate:[AuthGuard, AdminAuthGuard]},
  {path : "order-success/:id", component:OrderSuccessComponent, canActivate:[ AuthGuard ]},
  {path: '**', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
