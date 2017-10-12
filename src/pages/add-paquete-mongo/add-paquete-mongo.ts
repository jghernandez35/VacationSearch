import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

import { PaqueteMongoProvider } from '../../providers/paquetes-mongo/paquetes-mongo';
import { Paquete } from '../../providers/paquetes-mongo/paqueteM';

@Component({
  selector: 'page-add-paquete-mongo',
  templateUrl: 'add-paquete-mongo.html',
})
export class AddPaqueteMongoPage {

  paquete:Paquete;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public service: PaqueteMongoProvider,
    public toastCtrl: ToastController){
      this.paquete = new Paquete();
  }

  save() {
    this.service.insert(this.paquete)
      .subscribe(res => {
        if (res.success) {
          this.showToast("Paquete insertado !");
          this.navCtrl.pop();
        } else {
          this.showToast("Error al insertar Paquete");
        }
      });
  }
    
  showToast(msg: string) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }
}
