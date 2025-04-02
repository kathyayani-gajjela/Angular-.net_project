

import { Component, inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";
import { WeatherforecastService } from "./weatherforecast.service";
//import { ProductService } from "./services/product.service";

@Component({
  selector:'app-root',
  standalone:true,
  imports:[CommonModule],
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
 export class AppComponent{
  weatherForecasts:any[]=[];

  title="product";
  weatherForecastService=inject(WeatherforecastService);
  constructor(){
    this.weatherForecastService.get().subscribe(weatherForecasts=>{
      this.weatherForecasts=weatherForecasts;


    })
  }
 
}

