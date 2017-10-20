import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PaqueteM } from '../../providers/paquetes-mongo/paqueteM';

@Component({
  selector: 'page-paqueteviewm',
  templateUrl: 'paqueteviewm.html',
})
export class PaqueteviewmPage {

  PaqueteAuxM : PaqueteM;  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.PaqueteAuxM = this.navParams.get('mypaqueteM');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaqueteviewmPage');
  }

}
