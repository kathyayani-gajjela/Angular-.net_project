import { Component,inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WeatherforecastService } from '../weatherforecast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone:true,
  imports: [CommonModule,FormsModule,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username:string='';
  password:string='';
  errorMessage:string='';

  users:any[]=[];

  weatherForecastService=inject(WeatherforecastService);
  private router =inject(Router);
  constructor(){
    this.weatherForecastService.getUsers().subscribe(users=>{
      this.users=users;
    })
  }
  login() {
    // Check if the username and password exist in the users list
    const user = this.users.find(u => u.name === this.username && u.password === Number(this.password));

    if (user) {
      alert('Login successful!');
      this.errorMessage = '';
      this.router.navigate(['/home']);
      // Redirect to home page or perform login action
    } else {
      this.errorMessage = 'Invalid username or password!';
    }
  }

}
