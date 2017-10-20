import { Component } from '@angular/core';
import { NavController, NavParams, ToastController  } from 'ionic-angular';
//v1
//import { PaqueteDataProvider } from '../../providers/paquetes-data/paquetes-data';
//v2
import { AddPaquetePage } from '../add-paquete/add-paquete';
import { PaqueteDaoProvider } from '../../providers/paquetes-data/paquete-dao';
import { PaqueteSQL } from '../../providers/paquetes-data/paquete';
import { PaqueteviewPage } from '../paqueteview/paqueteview';


@Component({
  selector: 'page-paquete',
  templateUrl: 'paquete.html',
})
export class PaquetePage {

  paquetes:PaqueteSQL[] = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    //v2
    public dao:PaqueteDaoProvider,
    public toastCtrl: ToastController
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

  goToDel(paqueteaux : PaqueteSQL) {
    this.dao.delete(paqueteaux)
    this.loadPaquetes()
    this.showToast("Paquete eliminado de favoritos");
  }

  goToView(paqueteVSQL:PaqueteSQL){
    this.navCtrl.push(PaqueteviewPage, {mypaqueteSQL: paqueteVSQL});
  }
  //Se invoca cada que la pantalla es visible
  ionViewDidEnter() {
    this.dao.ready()
      .then(() => this.loadPaquetes());
  }

  showToast(msg: string) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }
}

/// codigo html 
// <ion-fab right bottom>
// <button (click)="goToAdd()" ion-fab  color="secondary"><ion-icon name="add"></ion-icon></button>
// </ion-fab>
