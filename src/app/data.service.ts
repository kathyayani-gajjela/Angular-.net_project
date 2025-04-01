// data.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private cartItemsSource = new BehaviorSubject<any[]>([]);  // Holds the cart items
  currentCart = this.cartItemsSource.asObservable();  // Observable to subscribe to

  constructor() {}

  // Add an item to the cart
  addItemToCart(item: any) {
    const currentItems = this.cartItemsSource.value;
    currentItems.push(item);  // Simply add the item
    this.cartItemsSource.next([...currentItems]);  // Emit the new value
  }

  // Remove an item from the cart
  removeItemFromCart(item: any) {
    const currentItems = this.cartItemsSource.value;
    const updatedItems = currentItems.filter(existingItem => existingItem.foodname !== item.foodname);
    this.cartItemsSource.next(updatedItems);  // Emit the updated list
  }
}
