import { NgModule } from '@angular/core';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { NewProductFormComponent } from './components/new-product-form/new-product-form.component';
import { AdminAuthGuard } from './services/admin-auth-guard.service';
import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from '../shared/services/auth-guard.service';
import { CoreModule } from '../core/core.module';
import { ShoppingModule } from '../shopping/shopping.module';
import { RouterModule } from '@angular/router';





@NgModule({
  declarations: [
    AdminOrdersComponent,
    NewProductFormComponent,
  ],
  imports: [
    SharedModule,
    ShoppingModule,
    CoreModule,
    RouterModule.forChild([
      {path : "new-product", component : NewProductFormComponent, canActivate:[AuthGuard, AdminAuthGuard]},
      {path : "admin/orders", component :  AdminOrdersComponent, canActivate:[AuthGuard, AdminAuthGuard]},
    ])
  ],
  providers:[
    AdminAuthGuard,
    AuthGuard
  ],
  
})
export class AdminModule { }
