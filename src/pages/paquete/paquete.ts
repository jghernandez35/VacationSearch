import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//v1
//import { PaqueteDataProvider } from '../../providers/paquetes-data/paquetes-data';
//v2
import { AddPaquetePage } from '../add-paquete/add-paquete';
import { PaqueteDaoProvider } from '../../providers/paquetes-data/paquete-dao';
import { Paquete } from '../../providers/paquetes-data/paquete';


@Component({
  selector: 'page-paquete',
  templateUrl: 'paquete.html',
})
export class PaquetePage {

  paquetes:Paquete[] = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    //v2
    public dao:PaqueteDaoProvider,
    /*public service: PaqueteDataProvider*/) {
      //this.paquetes = service.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaquetePage');
  }

  loadPaquetes() {
    this.dao.all()
      .then(data => this.paquetes = data);
  }

  goToAdd() {
    this.navCtrl.parent.push(AddPaquetePage);
  }
  //Se invoca cada que la pantalla es visible
  ionViewDidEnter() {
    this.dao.ready()
      .then(() => this.loadPaquetes());
  }

}
