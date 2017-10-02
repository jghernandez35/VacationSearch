import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HeladosDataProvider } from '../../providers/helados-data/helados-data';
import { Helado } from '../../providers/helados-data/helado';

@Component({
  selector: 'page-add-helado',
  templateUrl: 'add-helado.html',
})
export class AddHeladoPage {

  helado:Helado;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public service:HeladosDataProvider) {
    this.helado =  new Helado("",0,0,"");
  }

  save(){
    this.service.data.splice(0,0,this.helado);
    this.navCtrl.pop();    
  }

}
