import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { Storage } from '@ionic/storage';
import { PaquetePage } from '../paquete/paquete';
// Paquetes SQLite
////import { AddPaquetePage } from '../add-paquete/add-paquete';
import { PaqueteDaoProvider } from '../../providers/paquetes-data/paquete-dao';
//import { Paquete } from '../../providers/paquetes-data/paquete';
// Paquetes Mongo
import { AddPaqueteMongoPage } from '../add-paquete-mongo/add-paquete-mongo';
import { PaqueteMongoPage } from '../paquete-mongo/paquete-mongo';
import { Paquete } from '../../providers/paquetes-mongo/paqueteM';
////import { PaqueteMongoProvider } from '../../providers/paquetes-mongo/paquetes-mongo';

//borrar
////import { BebidasPage } from '../bebidas/bebidas';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  paquetes: Paquete[] = [];

//  root: any = PaquetePage;
  root: any = PaqueteMongoPage;

  menuOpc: Menu[] = [
    { label: 'Inicio', icon: 'home' },
    { label: 'Favoritos', icon: 'heart' },
    { label: 'Notificaciones', icon: 'notifications' },
    { label: 'Lista de deseos', icon: 'heart' },
    { label: 'Mi cuenta', icon: 'contact' },
    { label: 'Información', icon: 'information-circle' }
  ];

  constructor(
    public navCtrl: NavController, 
    public dao:PaqueteDaoProvider, 
    public storage: Storage) { }

  setContent(index: number) {
    if (index == 0) {
      this.root = PaqueteMongoPage;
    } else {
      this.root = PaquetePage;
    }
  }

  logout() {
    this.storage.set("logged", false);
    this.navCtrl.setRoot(LoginPage);
  }

  // loadPaquetes() {
  //   this.dao.all()
  //     .then(data => this.paquetes = data);
  // }

  goToAdd(){
    //this.navCtrl.push(AddPaquetePage);
    this.navCtrl.push(AddPaqueteMongoPage);
  }

  //Se invoca cada que la pantalla es visible
  // ionViewDidEnter() {
  //   this.dao.ready()
  //     .then(() => this.loadPaquetes());
  // }

}

interface Menu {
  label: string;
  icon: string;
}

