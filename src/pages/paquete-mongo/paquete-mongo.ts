import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// imports para mongo
import { AddPaqueteMongoPage } from '../add-paquete-mongo/add-paquete-mongo';
import { Paquete } from '../../providers/paquetes-mongo/paqueteM';
import { PaqueteMongoProvider } from '../../providers/paquetes-mongo/paquetes-mongo';

@Component({
  selector: 'page-paquete-mongo',
  templateUrl: 'paquete-mongo.html',
})
export class PaqueteMongoPage {

  paquetes: Paquete[] = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public service: PaqueteMongoProvider,) {
  }
  
  ionViewDidLoad() {
    this.loadPaquetes();
  }

  goToAdd() {
    this.navCtrl.push(AddPaqueteMongoPage);
  }

  loadPaquetes(refresher = null) {
    this.service.all().subscribe(res => {
      this.paquetes = res;
      if(refresher != null)  refresher.complete();
    });
  }

  doRefresh(refresher) {
    this.loadPaquetes(refresher);
  }
  ///////////
  // loadPaquetes() {
  //   this.dao.all()
  //     .then(data => this.paquetes = data);
  // }

  // goToAdd() {
  //   this.navCtrl.parent.push(AddPaquetePage);
  // }
  //Se invoca cada que la pantalla es visible
  // ionViewDidEnter() {
  //   this.dao.ready()
  //     .then(() => this.loadPaquetes());
  // }

}
