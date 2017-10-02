import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PaqueteDataProvider } from '../../providers/paquetes-data/paquetes-data';
import { Paquete } from '../../providers/paquetes-data/paquete';
import { AddPaquetePage } from '../add-paquete/add-paquete';

@Component({
  selector: 'page-paquete',
  templateUrl: 'paquete.html',
})
export class PaquetePage {

  paquetes:Paquete[] = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public service: PaqueteDataProvider) {
      this.paquetes = service.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaquetePage');
  }

  goToAdd() {
    this.navCtrl.parent.push(AddPaquetePage);
  }
  
}
