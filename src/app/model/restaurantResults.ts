
import { Restaurant } from './restaurant';

export class RestaurantResults {
    restaurants: Restaurant[];
    count: number;
    days;

    constructor(obj?: any) {
        this.restaurants = obj.results.map(result => new Restaurant(result)) || [];
        this.count = obj.count;
        this.days =  obj.results.map(result => (result.days))
    }
}