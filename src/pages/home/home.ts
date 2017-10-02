import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { Storage } from '@ionic/storage';
import { PaquetePage } from '../paquete/paquete';

import { BebidasPage } from '../bebidas/bebidas';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  root: any = PaquetePage;

  menuOpc: Menu[] = [
    { label: 'Inicio', icon: 'home' },
    { label: 'Notificaciones', icon: 'notifications' },
    { label: 'Lista de deseos', icon: 'heart' },
    { label: 'Mi cuenta', icon: 'contact' },
    { label: 'Información', icon: 'information-circle' }
  ];

  constructor(public navCtrl: NavController, public storage: Storage) { }

  setContent(index: number) {
    if (index == 0) {
      this.root = PaquetePage;
    } else {
      this.root = BebidasPage;
    }
  }

  logout() {
    this.storage.set("logged", false);
    this.navCtrl.setRoot(LoginPage);
  }

}

interface Menu {
  label: string;
  icon: string;
}
