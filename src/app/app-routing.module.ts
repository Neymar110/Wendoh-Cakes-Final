import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutMeComponent } from './core/components/about-me/about-me.component';
import { HomeComponent } from './core/components/home/home.component';
import { LoginComponent } from './core/components/login/login.component';
import { NewMenuComponent } from './new-menu/new-menu.component';
import { MyOrdersModalComponent } from './shopping/components/my-orders-modal/my-orders-modal.component';
import { OrderSuccessComponent } from './shopping/components/order-success/order-success.component';

const routes: Routes = [
  {path : "home", component : HomeComponent},
  {path : "about-me", component : AboutMeComponent},
  {path : "login", component : LoginComponent},
  {path : "logout", component: LoginComponent},
  {path : "new-menu", component : NewMenuComponent},
  {path : "new-my-orders", component : MyOrdersModalComponent},
  {path : "order-success", component : OrderSuccessComponent},
  {path : "", redirectTo:"home", pathMatch:"full"},
  {path: '**', component:HomeComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
