import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CheckOutComponent } from './shopping/components/checkout/checkout.component';
import { HomeComponent } from './core/components/home/home.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { MenuComponent } from './shopping/components/menu/menu.component';
import { AboutMeComponent } from './core/components/about-me/about-me.component';
import { LoginComponent } from './core/components/login/login.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { UserService } from './shared/services/user.service';
import { AuthService } from './shared/services/auth.service';
import { AngularFireModule } from '@angular/fire/compat';
import { ShoppingCartComponent } from './shopping/components/shopping-cart/shopping-cart.component';
import { NewProductFormComponent } from './admin/components/new-product-form/new-product-form.component';
import { ProductCardComponent } from './shared/components/product-card/product-card.component';
import { ProductFilterComponent } from './shopping/components/menu/product-filter/product-filter.component';
import { ProductQuantityComponent } from './shared/components/product-quantity/product-quantity.component';
import { OrderService } from './shared/services/order-service.service';
import { ShoppingCartService } from './shared/services/shopping-cart.service';
import { ProductService } from './shared/services/product.service';
import { CategoryService } from './shared/services/category.service';
import { AdminAuthGuard } from './admin/services/admin-auth-guard.service';
import { AuthGuard } from './shared/services/auth-guard.service';
import { ShippingFormComponent } from './shopping/components/shipping-form/shipping-form.component';
import { ShoppingCartSummaryComponent } from './shopping/components/shopping-cart-summary/shopping-cart-summary.component';
import { MyOrdersComponent } from './shopping/components/my-orders/my-orders.component';
import { AdminOrdersComponent } from './admin/components/admin-orders/admin-orders.component';
import { OrderSuccessComponent } from './shopping/components/order-success/order-success.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    MenuComponent,
    AboutMeComponent,
    LoginComponent,
    ShoppingCartComponent,
    NewProductFormComponent,
    ProductCardComponent,
    ProductFilterComponent,
    ProductQuantityComponent,
    CheckOutComponent,
    ShippingFormComponent,
    ShoppingCartSummaryComponent,
    MyOrdersComponent,
    AdminOrdersComponent,
    OrderSuccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    // provideDatabase(() => getDatabase())
  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    AdminAuthGuard,
    CategoryService,
    ProductService,
    ShoppingCartService,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
