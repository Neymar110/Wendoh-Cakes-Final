import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CheckOutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { LoginComponent } from './login/login.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { AngularFireModule } from '@angular/fire/compat';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { NewProductFormComponent } from './new-product-form/new-product-form.component';
import { ProductCardComponent } from './shared/components/product-card/product-card.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { ProductQuantityComponent } from './product-quantity/product-quantity.component';
import { OrderService } from './order-service.service';
import { ShoppingCartService } from './shopping-cart.service';
import { ProductService } from './product.service';
import { CategoryService } from './category.service';
import { AdminAuthGuard } from './admin-auth-guard.service';
import { AuthGuard } from './auth-guard.service';
import { ShippingFormComponent } from './shipping-form/shipping-form.component';
import { ShoppingCartSummaryComponent } from './shopping-cart-summary/shopping-cart-summary.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';

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
    AdminOrdersComponent
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
