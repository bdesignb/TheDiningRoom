export class Menu {
    name: string;
    price: string;    

    constructor(obj?: any) {
        this.name = obj && obj.name || "";
        this.price = obj && obj.price || "";           
    }
}