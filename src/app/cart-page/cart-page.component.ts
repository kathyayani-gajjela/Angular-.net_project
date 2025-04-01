// cart-page.component.ts
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-page',
  imports:[CommonModule],
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.currentCart.subscribe(items => {
      this.cartItems = items;  // Update cart items when data changes
    });
  }

  removeFromCart(item: any) {
    this.dataService.removeItemFromCart(item);  // Remove item from cart
  }
}



