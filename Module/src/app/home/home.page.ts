import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Militia } from '../Class/Militia';
import { Necromance } from '../Class/Necromancer';
import { Orcs } from '../Class/Orcs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule],
})
export class HomePage {
  Input_nn!:string;
  Input_dbn!:string;
  Input_mn!:string;
  Input_on!:string;
  Input_wn!:string;
  Input_hmn!:string;
  show_speed: string = "";
  show_cost: string = "";

  constructor() {}

  info_military(nn:string = "10" ,dbn:string = "50" ,mn:string = "100",on:string = "20",wn:string = "10",hmn:string = "50"){
    let necromant:Necromance;
    let orcs:Orcs;
    let militia: Militia;
    let necromant_n = parseInt(nn);
    let deadbody_n = parseInt(dbn);
    let orcs_n = parseInt(on);
    let humanmeet_n = parseInt(hmn);
    let wargs_n = parseInt(wn);
    let militia_n = parseInt(mn);
    necromant = new Necromance(5, 15, necromant_n, deadbody_n);
    orcs = new Orcs(3,13, orcs_n, humanmeet_n, wargs_n);
    militia = new Militia(0,5,militia_n);
    this.speed_military(orcs,necromant,militia);
    this.cost_military(orcs,necromant,militia);
  }
  cost_military(orcs:Orcs, necromant:Necromance, militia:Militia){
    let sum:number = 0;
    sum+=orcs.get_cost();
    sum+=necromant.get_cost();
    sum+=militia.get_cost();
    this.show_cost = sum + " золотих в день."
  }

  speed_military(orcs:Orcs, necromant:Necromance, militia:Militia){
    let min:number = 1000;
    if (militia.get_speed()<min && militia.get_count()>0) min = militia.get_speed();
    if (orcs.get_speed()<min && orcs.get_count()>0) min = orcs.get_speed();
    if (necromant.get_speed()<min && necromant.get_count()>0) min = necromant.get_speed();
    this.show_speed = min + " км/год.";
  }
}
