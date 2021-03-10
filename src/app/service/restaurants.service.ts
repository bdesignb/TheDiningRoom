import { RestaurantResults } from './../model/restaurantResults';
import { Restaurant } from './../model/restaurant';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { MenuResults } from '../model/menuResults';

const baseUrl="http://localhost:3000/api/restaurants/";

@Injectable({
  providedIn: 'root'
})

export class RestaurantsService {

  constructor(private http: HttpClient) { }

  getAllRestaurants(parameters?:any):Observable<RestaurantResults> {
    let queryParameters = {};
    if(parameters) {
      queryParameters = {
        params: new HttpParams()
        .set('page', parameters.page || "")
        .set('pageSize', parameters.pageSize || "")
        .set("filter", JSON.stringify(parameters.filter) || "")
      }
    }

    return this.http.get(baseUrl, queryParameters).pipe(map(
      response => {
        return new RestaurantResults(response)
      }
    ))
  }

  get(restaurantId:number): Observable<MenuResults> {    
    return this.http.get(baseUrl + restaurantId + "/" + "menus").pipe(map(
      response => {
        return new MenuResults(response)
      }
    ))
  }


}
