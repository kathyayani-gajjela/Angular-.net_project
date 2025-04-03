import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherforecastService {

  constructor() { }
  private http=inject(HttpClient);
  private apiUrl=environment.apiURL+'/api/products';
  private userapiUrl=environment.apiURL+'/api/User';
  public get():Observable<any>{
    return this.http.get(this.apiUrl);
  }
  public getUsers():Observable<any>{
    return this.http.get(this.userapiUrl);
  }
}
