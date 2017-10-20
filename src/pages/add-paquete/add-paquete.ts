import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import { PaqueteDataProvider } from '../../providers/paquetes-data/paquetes-data';
import { PaqueteDaoProvider } from '../../providers/paquetes-data/paquete-dao';
import { PaqueteSQL } from '../../providers/paquetes-data/paquete';

@Component({
  selector: 'page-add-paquete',
  templateUrl: 'add-paquete.html',
})
export class AddPaquetePage {

  paquete:PaqueteSQL;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public dao: PaqueteDaoProvider
    /*public service:PaqueteDataProvider*/) {
//      this.paquete = new Paquete(0,"",0,"","");
      this.paquete = new PaqueteSQL();
  }

  save(){
      this.dao.insert(this.paquete)
      .then(res => this.navCtrl.pop());
//    this.service.data.splice(0,0,this.paquete);
//    this.navCtrl.pop();  
  }

}
