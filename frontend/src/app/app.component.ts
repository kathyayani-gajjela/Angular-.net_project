

import { Component, inject } from "@angular/core";
import { RouterOutlet,RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
//import { WeatherforecastService } from "./weatherforecast.service";
//import { ProductService } from "./services/product.service";

@Component({
  selector:'app-root',
  standalone:true,
  imports:[CommonModule,RouterModule,HeaderComponent],
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
 export class AppComponent{
  

  title="product";
  
 
}

