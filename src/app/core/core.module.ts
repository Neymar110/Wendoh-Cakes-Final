import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewNavComponent } from './components/new-nav/new-nav.component';



@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AboutMeComponent,
    LoginComponent,
    NewNavComponent,
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild([])
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    NavbarComponent,
    NewNavComponent
  ]
})
export class CoreModule { }
