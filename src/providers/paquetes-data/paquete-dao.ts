import { Injectable } from '@angular/core';
import { DatabaseConnectionProvider } from '../database-connection/database-connection';
import { SQLiteObject } from '@ionic-native/sqlite';
import { Paquete } from './paquete';


@Injectable()
export class PaqueteDaoProvider {

  db: SQLiteObject;

  constructor(public con: DatabaseConnectionProvider) {}

  ready(): Promise<boolean> {
    if (this.db) {
      return Promise.resolve(true);
    } else {
      return this.con.getConnection().then(db => {
        this.db = db;
        return Promise.resolve(true);
      });
    }
  }

  insert(paquete: Paquete) {
    const sql = "INSERT INTO paquete (nombre, precio, descripcion, imagen) VALUES(?,?,?,?)";
    return this.db.executeSql(sql, [paquete.nombre, paquete.precio, paquete.descripcion, paquete.imagen]);
  }

  update(paquete: Paquete) {
    const sql = "UPDATE paquete set nombre = ?, precio = ?, descripcion = ?, imagen = ? WHERE id = ?";
    return this.db.executeSql(sql, [paquete.nombre, paquete.precio, paquete.descripcion, paquete.imagen, paquete.id]);
  }

  delete(id: number) {
    const sql = "DELETE paquete WHERE id = ?";
    return this.db.executeSql(sql, [id]);
  }

  paqueteById(id: number): Promise<Paquete> {
    const sql = "SELECT * FROM paquete WHERE id = ?";
    return this.db.executeSql(sql, [id]).then(results => {
      let paquete = null;
      if (results.rows.length > 0) {
        paquete = results.rows.item(0);
      }
      return Promise.resolve(paquete);
    });
  }

  all(): Promise<Paquete[]> {
    const sql = "SELECT *  FROM paquete";
    return this.db.executeSql(sql, []).then(results => {
      let data = [];
      for (let i = 0; i < results.rows.length; i++) {
        const paquete = results.rows.item(i);
        data.push(paquete);
      }
      return Promise.resolve(data);
    });
  }


}