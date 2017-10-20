import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PaqueteSQL } from '../../providers/paquetes-data/paquete';

@Component({
  selector: 'page-paqueteview',
  templateUrl: 'paqueteview.html',
})
export class PaqueteviewPage {
  
  PaqueteAu : PaqueteSQL;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.PaqueteAu = this.navParams.get('mypaqueteSQL');
    //console.log('paquete recibido == ', this.PaqueteAu.nombre);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaqueteviewPage');
  }

}
