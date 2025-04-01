// food-page.component.ts
import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-food-page',
  imports:[CommonModule],
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent {
  items = [
    { foodname: 'Pizza', price: 150, restaurent: 'PizzaHut', offer: '25%', image: '/pizza.jpg' },
    { foodname: 'Burger', price: 170, restaurent: 'Burger King', offer: '5%', image: '/burger.jpg' },
    { foodname: 'Fried Chicken', price: 250, restaurent: 'KFC', offer: '30%', image: '/friedchicken.jpg' },
    { foodname: 'Ice Cream', price: 100, restaurent: 'Blue Stone', offer: '50%', image: '/icecream.jpg' },
    { foodname: 'Biryani', price: 190, restaurent: 'SVN Grand', offer: '20%', image: '/biriyani.jpg' }
  ];

  constructor(private dataService: DataService) {}

  addToCart(item: any) {
    this.dataService.addItemToCart(item);  // Call the service to add an item to the cart
  }
}
