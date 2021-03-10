import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input() rating: number;
  @Input() price: number;
  starFull: number[] = [];
  starEmpty: number[] = [];
  coinFull: number[] = [];
  coinEmpty: number[] = [];

  constructor() { }

  ngOnInit(): void {
  
      for (let i = 0; i < this.rating; i++) {
        this.starFull.push(i)
      }       
      for (let i = 0; i < (5 - this.rating); i++) {
        this.starEmpty.push(i)
      }

      
      for (let i = 0; i < this.price; i++) {
        this.coinFull.push(i)
      }
      for (let i = 0; i < (5 - this.price); i++) {
        this.coinEmpty.push(i)
      }      
    }


  }
