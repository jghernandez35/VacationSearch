import { Injectable } from '@angular/core';
import { PaqueteSQL } from './paquete';

@Injectable()
export class PaqueteDataProvider {

  data:PaqueteSQL[];

  constructor() {
    //this.loadData();
  }

  // loadData() {
  //   this.data = [
  //     { _id: "1", nombre: 'San Andres', precio: 7000, descripcion: 'Paquete todo incluido, con alojamiento multiple, desayuno y cena.', imagen: 'http://www.hotelsanluisvillage.com/antigua/wp-content/uploads/2013/10/johnny-cay-in-san-andres-colombia.jpg' },
  //     { _id: "2", nombre: 'Cartagena', precio: 5000, descripcion: 'Paquete con alojamiento multiple, desayuno y cena.', imagen: 'http://www.tecnogiras.com/wp-content/uploads/2016/04/Cartagena.png' },
  //     { _id: "3", nombre: 'Santa Marta', precio: 5000, descripcion: 'Paquete con desayuno y cena.', imagen: 'https://ndturismo.com/wp-content/uploads/2016/11/santa-marta-p%C3%A1gina-800x800.jpg' },
  //     { _id: "4", nombre: 'Parque del Cafe',  precio: 5000, descripcion: 'Paquete todo incluido, con alojamiento multiple, desayuno y cena.', imagen: 'http://www.parquedelcafearmenia.com/images/galeria/parque-del-cafe-1.jpg' },
  //     { _id: "5", nombre: 'Panaca',  precio: 3000, descripcion: '', imagen: '' },
  //     { _id: "6", nombre: 'Barranquilla',  precio: 12000, descripcion: '', imagen: '' },
  //   ];
  // }

}