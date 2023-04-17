import { Militia } from "./Militia";
import { Warrior } from "./Warrior";
export class Necromance extends Warrior {
    private dead_bodies:number;
    private salary_kat:number = 1;
    get_cost(){
        let cost:number = 0;
        cost += this.get_count() * this.get_price();
        let diff = this.dead_bodies - this.get_count() ;
        if ((diff<0)) {
                alert("У вас закінчились мертві тіла. Доки не буде поповнено запаси, з вас зніматиметься плата за роботу ката.");
                cost += (-diff) * this.salary_kat;
                this.dead_bodies = 0;
        }
        else this.dead_bodies= this.dead_bodies - this.get_count();
        return cost;
    }

    constructor( price:number, speed:number, count:number, dead_bodies:number) {
        super (price, speed, count);
        this.dead_bodies = dead_bodies;
    }
}