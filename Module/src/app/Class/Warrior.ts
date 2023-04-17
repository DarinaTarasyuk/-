import { ICost } from "../Interfaces/ICost";

export abstract class Warrior implements ICost {
    private price:number;
    private speed:number;
    private count:number;
    abstract get_cost():number;
    constructor( price:number,   speed:number, count:number) {
        this.price = price;
        this.speed = speed;
        this.count = count;
    }
    protected set_price(p:number){
        if (p>=0) this.price = p;
        else this.price = 0;
    }

    protected set_speed(s:number){
        if (s>=0) this.speed = s;
        else this.speed = 0;
    }

    protected set_count(c:number){
        if (c>=0) this.count = c;
        else this.count = 0;
    }

    get_price(){
        return this.price;
    }

    get_speed(){
        return this.speed;
    }

    get_count(){
        return this.count;
    }
}