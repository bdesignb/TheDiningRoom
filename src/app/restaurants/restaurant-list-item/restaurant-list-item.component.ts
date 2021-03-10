import { Component, Input, NgModule, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Menu } from 'src/app/model/menu';
import { Restaurant } from 'src/app/model/restaurant';
import { RestaurantsService } from 'src/app/service/restaurants.service';
import { convertToObject } from 'typescript';
import { RestaurantItemComponent } from '../restaurant-item/restaurant-item.component';

@Component({
  selector: 'app-restaurant-list-item',
  templateUrl: './restaurant-list-item.component.html',
  styleUrls: ['./restaurant-list-item.component.css']
})
export class RestaurantListItemComponent implements OnInit {
  @Input() restaurant: Restaurant;
  menus: Menu[] = []

  constructor(private modalService: NgbModal, private restaurantService: RestaurantsService) { }

  ngOnInit(): void {}

  openModal(restaurantId) {

    if (restaurantId == undefined) {
      restaurantId = 0;
    }

    this.restaurantService.get(restaurantId).subscribe(
      data => {
        this.menus = data.menus;
        const modalRef = this.modalService.open(RestaurantItemComponent)
        modalRef.componentInstance.menus = this.menus[0];
        modalRef.componentInstance.restaurant = this.restaurant;
      }),
      error => console.log(error);

  }



}
