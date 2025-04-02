import { Component,OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';
import { WeatherforecastService } from '../weatherforecast.service';

@Component({
  selector: 'app-cart-page',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent {
  cartItems:any[]=[];
  constructor(private dataService:DataService){}
  ngOnInit(){
    this.dataService.currentCart.subscribe(items=>{
      this.cartItems=items;
      console.log(items);
    });
  }

}
