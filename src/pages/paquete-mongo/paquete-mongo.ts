import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
// imports para mongo
import { AddPaqueteMongoPage } from '../add-paquete-mongo/add-paquete-mongo';
import { PaqueteM } from '../../providers/paquetes-mongo/paqueteM';
import { PaqueteMongoProvider } from '../../providers/paquetes-mongo/paquetes-mongo';
// imports para persistencia en SQLite
import { PaqueteDaoProvider } from '../../providers/paquetes-data/paquete-dao';
//import { PaqueteSQL } from '../../providers/paquetes-data/paquete';
import { PaqueteviewmPage } from '../paqueteviewm/paqueteviewm';

@Component({
  selector: 'page-paquete-mongo',
  templateUrl: 'paquete-mongo.html',
})
export class PaqueteMongoPage {

  paquetes: PaqueteM[] = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public service: PaqueteMongoProvider,
    public dao: PaqueteDaoProvider,
    public toastCtrl: ToastController) {
  }
  
  ionViewDidLoad() {
    this.loadPaquetes();
  }

  goToAdd() {
    this.navCtrl.push(AddPaqueteMongoPage);
  }

  goToFav(paqueteaux : PaqueteM) {
    // implementar agregar un paquete nuevo traido desde mongo a sqlite
    this.dao.insertM(paqueteaux).then();
    this.showToast("Paquete agregado a Favoritos");
  }
  
  goToView(paqueteVM:PaqueteM){
    this.navCtrl.push(PaqueteviewmPage, {mypaqueteM: paqueteVM});
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

  showToast(msg: string) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }
}
