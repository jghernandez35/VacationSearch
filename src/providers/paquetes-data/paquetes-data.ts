import { Injectable } from '@angular/core';
import { Paquete } from './paquete';

@Injectable()
export class PaqueteDataProvider {

  data:Paquete[];

  constructor() {
    this.loadData();
  }

  loadData() {
    this.data = [
      { nombre: 'San Andres', precio: 7000, imagen: 'http://www.hotelsanluisvillage.com/antigua/wp-content/uploads/2013/10/johnny-cay-in-san-andres-colombia.jpg' },
      { nombre: 'Cartagena', precio: 5000, imagen: 'http://www.tecnogiras.com/wp-content/uploads/2016/04/Cartagena.png' },
      { nombre: 'Santa Marta', precio: 5000, imagen: 'https://ndturismo.com/wp-content/uploads/2016/11/santa-marta-p%C3%A1gina-800x800.jpg' },
      { nombre: 'Parque del Cafe',  precio: 5000, imagen: 'http://www.parquedelcafearmenia.com/images/galeria/parque-del-cafe-1.jpg' },
      { nombre: 'Panaca',  precio: 3000, imagen: '' },
      { nombre: 'Barranquilla',  precio: 12000, imagen: '' },
      { nombre: 'Gorgona',  precio: 5000, imagen: '' },
      { nombre: 'San Cipriano',  precio: 5000, imagen: '' },
      { nombre: 'Buenaventura',  precio: 5000, imagen: '' },
      { nombre: 'Laguna de la cocha',  precio: 5000, imagen: '' },
      { nombre: 'Las Lajas',  precio: 3000, imagen: '' },
      { nombre: 'Volcan Purace',  precio: 5000, imagen: '' },
      { nombre: 'Rio Magdalena',  precio: 3000, imagen: '' },
      { nombre: 'La Guagira',  precio: 5000, imagen: '' },
    ];
  }

}