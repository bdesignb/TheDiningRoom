import { RestaurantsService } from './../service/restaurants.service';
import { Restaurant } from './../model/restaurant';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Menu } from '../model/menu';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})

export class RestaurantsComponent implements OnInit {
  restaurants: Restaurant[] = []; 
  count: number;
  days;

  parameters: any = {
    page: 1,
    pageSize: 12,
    filter: {  
      cuisine: "pizza",   
      priceFrom: 0,
      priceTo: 5
    }
  }

  constructor(private restaurantService: RestaurantsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.parameters.filter.cuisine = params['cuisine'];
      this.refreshRestaurants();
    })
    this.refreshRestaurants()
    console.log(this.count)
  }

  refreshRestaurants() {
    this.restaurantService.getAllRestaurants(this.parameters).subscribe(
      data => {
        console.log(data)
         this.restaurants = data.restaurants;     
         this.count = data.count; 
         this.days = data.days;        
      }
    )
  }

}
