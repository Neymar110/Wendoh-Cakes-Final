import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AboutMeComponent,
    LoginComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([])
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    NavbarComponent
  ]
})
export class CoreModule { }
