import { Component,inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';
import { WeatherforecastService } from '../weatherforecast.service';


@Component({
  selector: 'app-food-page',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent {
  weatherForecasts:any[]=[];

  title="product";
  weatherForecastService=inject(WeatherforecastService);
  constructor(private dataService:DataService){
    this.weatherForecastService.get().subscribe(weatherForecasts=>{
      this.weatherForecasts=weatherForecasts;
    })
  }
  
  senddata(weatherForecast:any){
    this.dataService.addItemToCart(weatherForecast)
  }

}
