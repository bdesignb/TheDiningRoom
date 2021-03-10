import { Component, Input, OnInit } from '@angular/core';
import { Menu } from 'src/app/model/menu';
import { Restaurant } from 'src/app/model/restaurant';
import { RestaurantsService } from 'src/app/service/restaurants.service';
import { convertToObject } from 'typescript';


@Component({
  selector: 'app-restaurant-item',
  templateUrl: './restaurant-item.component.html',
  styleUrls: ['./restaurant-item.component.css']
})
export class RestaurantItemComponent implements OnInit {
  @Input() restaurant: Restaurant;
  @Input() menus: Menu[] = [];
  days;

  constructor(private restaurantService: RestaurantsService) { }

  ngOnInit(): void {
    console.log("iz itema:", this.menus)
    console.log("iz itema ", this.restaurant.days)
    this.days = this.restaurant.days
  }
  

  nekaFunkcija(day) {
   switch (day) {
      case 0:
          return "It is a Sunday."
          break;
      case 1:
          console.log("It is a Monday.");
          break;
      case 2:
          console.log("It is a Tuesday.");
          break;
      case 3:
          console.log("It is a Wednesday.");
          break;
      case 4:
          console.log("It is a Thursday.");
          break;
      case 5:
          console.log("It is a Friday.");
          break;
      case 6:
          console.log("It is a Saturday.");
          break;
          case 7:
          console.log("It is a Saturday.");
          break;
      default:
          return "No such day exists!"
          
  }
}
  
}
