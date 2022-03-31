import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { AdminAuthGuard } from './admin-auth-guard.service';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { AuthGuard } from './auth-guard.service';
import { CheckOutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { NewProductFormComponent } from './new-product-form/new-product-form.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

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
  {path: '**', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
