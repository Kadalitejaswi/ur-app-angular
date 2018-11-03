import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule,Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PropertiesComponent } from './properties/properties.component';
import { CarsComponent } from './properties/cars/cars.component';
import { BikesComponent } from './properties/bikes/bikes.component';
import { HousesComponent } from './properties/houses/houses.component';


const routes:Routes=[
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'Navigation',component:NavigationComponent},
  {path:'properties',component:PropertiesComponent,
  
  children:[
  {path:'propeties/cars',component:CarsComponent},
  {path:'propeties/bikes',component:BikesComponent},
  {path:'propeties/houses',component:HousesComponent},]
},
  {path:'**',component:NotFoundComponent}
]

@NgModule({

  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],

  declarations: []
})
export class AppRoutingModule { }
