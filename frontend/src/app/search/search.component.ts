import { Component,inject ,OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WeatherforecastService } from '../weatherforecast.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search',
  standalone:true,
  imports: [FormsModule,CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
 //cartItems:any[]=[];
 inputs:string='';
 storeValue(){

 }
 weatherForecasts:any[]=[];
 weatherForecastService=inject(WeatherforecastService);
   constructor(private dataService:DataService){
     this.weatherForecastService.get().subscribe(weatherForecasts=>{
      this.weatherForecasts=weatherForecasts;
     })
   }
   /*ngOnInit(){
    this.dataService.currentCart.subscribe(items=>{
      this.cartItems=items;
      
      
    });*/
    senddata(weatherForecast:any){
      this.dataService.addItemToCart(weatherForecast)
    }
  
}
