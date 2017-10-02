import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PaqueteDataProvider } from '../../providers/paquetes-data/paquetes-data';
import { Paquete } from '../../providers/paquetes-data/paquete';

@Component({
  selector: 'page-add-paquete',
  templateUrl: 'add-paquete.html',
})
export class AddPaquetePage {

  paquete:Paquete;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public service:PaqueteDataProvider) {
      this.paquete = new Paquete("",0,"","");
  }

  save(){
    this.service.data.splice(0,0,this.paquete);
    this.navCtrl.pop();    
  }

}
