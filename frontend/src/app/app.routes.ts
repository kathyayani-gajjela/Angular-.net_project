import { Routes } from '@angular/router';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'cart-page',component:CartPageComponent},
    {path:'food-page',component:FoodPageComponent},
    {path:'search',component:SearchComponent},
    
];
