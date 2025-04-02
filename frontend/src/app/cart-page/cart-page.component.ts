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
  totalPrice:number=0;
  constructor(private dataService:DataService){}
  ngOnInit(){
    this.dataService.currentCart.subscribe(items=>{
      this.cartItems=items;
      this.calculateTotalPrice();
      
    });
  }
  deletedata(item:any){
    this.dataService.removeItemFromCart(item);
  }
  calculateTotalPrice() {
    this.totalPrice = this.cartItems.reduce((sum, item) => sum + item.price, 0);
  }
  


}
