import { Militia } from "./Militia";
import { Warrior } from "./Warrior";
export class Orcs extends Warrior {
    private human_meet:number;
    private count_wargs:number;
    private human_meet_сost:number = 3;
    get_cost(){
        let cost:number = 0;
        cost += this.get_count() * this.get_price();
        this.human_meet = this.human_meet - this.count_wargs;
        if (this.human_meet<0) {
                alert("У вас закінчився корм для варгів, поки ви не поповните запаси, з вас зніматиметься додаткова плата.");
                this.human_meet = 0;
                cost +=this.human_meet_сost*this.count_wargs;
            }
        return cost;
    }

    constructor( price:number, speed:number, count:number, human_meet:number, count_wargs:number) {
        super (price, speed, count);
        this.human_meet = human_meet;
        this.count_wargs =count_wargs;
    }
}