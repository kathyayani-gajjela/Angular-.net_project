import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private cartItemsSource = new BehaviorSubject<any[]>([]);  // Holds the cart items
  currentCart = this.cartItemsSource.asObservable(); 

  constructor() {}
  addItemToCart(weatherForecast:any){
    const currentItems = this.cartItemsSource.value;
    currentItems.push(weatherForecast);  // Simply add the item
    this.cartItemsSource.next([...currentItems]); 
  }

  removeItemFromCart(item:any){
    const currentItems = this.cartItemsSource.value;
    const updatedItems = currentItems.filter(existingItem => existingItem.name !== item.name);
    this.cartItemsSource.next(updatedItems);  // Emit the updated list
  }
  
}
