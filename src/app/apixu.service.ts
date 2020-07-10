import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }

  getWeather(location){
    return this.http.get(
        "https://cors-anywhere.herokuapp.com/https://api.apixu.com/v1/current.json?key=46d5edb68336d2e2cdc20d5d46dd8cf5&q=" + location
    );
  }
}
