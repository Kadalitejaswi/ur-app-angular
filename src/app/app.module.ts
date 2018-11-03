import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza.component';
import { IceCreamComponent } from './ice-cream/ice-cream.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { ChocolateComponent } from './chocolate/chocolate.component';
import { PropertiesComponent } from './properties/properties.component';
import { CarsComponent } from './properties/cars/cars.component';
import { BikesComponent } from './properties/bikes/bikes.component';
import { HousesComponent } from './properties/houses/houses.component';
import { PropertiesModule } from './properties/properties.module';
import { PizzaService } from './sevices/pizza.service';


@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    IceCreamComponent,
    HeaderComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    NavigationComponent,
    FooterComponent,
    NotFoundComponent,
    ChocolateComponent,
    PropertiesComponent,
    CarsComponent,
    BikesComponent,
    HousesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PropertiesModule,
    FormsModule,
    
  ],
  providers: [PizzaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
