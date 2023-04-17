import { Warrior } from "./Warrior";
export class Militia extends Warrior {
    constructor( price:number, speed:number, count:number) {
        super (price,speed,count);
    }

    get_cost(){
        let cost:number = 0;
        cost = this.get_count() * this.get_price();
        return cost;
    }

}