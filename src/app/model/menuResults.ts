import { Menu } from "./menu";

export class MenuResults {
    menus: Menu[];
    count: number;   
    restaurantId: number; 

    constructor(obj?: any) {
        this.menus = obj && obj.results.map(result => result.items.map(item => new Menu(item))) || "";
        this.count = obj && obj.count || "";   
        this.restaurantId = obj && obj.restaurantId || "";         
    }
}