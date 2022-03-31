import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminOrdersComponent } from './admin/components/admin-orders/admin-orders.component';
import { NewProductFormComponent } from './admin/components/new-product-form/new-product-form.component';
import { AdminAuthGuard } from './admin/services/admin-auth-guard.service';
import { AboutMeComponent } from './core/components/about-me/about-me.component';
import { HomeComponent } from './core/components/home/home.component';
import { LoginComponent } from './core/components/login/login.component';
import { AuthGuard } from './shared/services/auth-guard.service';

const routes: Routes = [
  {path : "", redirectTo:"home", pathMatch:"full"},
  {path : "home", component : HomeComponent},
  {path : "about-me", component : AboutMeComponent},
  {path : "login", component : LoginComponent},
  {path : "logout", component: LoginComponent},
  {path: '**', component:HomeComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
