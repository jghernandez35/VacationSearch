import { Injectable } from '@angular/core';
import { DatabaseConnectionProvider } from '../database-connection/database-connection';
import { SQLiteObject } from '@ionic-native/sqlite';
import { PaqueteSQL } from './paquete';
import { PaqueteM } from '../paquetes-mongo/paqueteM';

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

  insert(paquete: PaqueteSQL) {
    const sql = "INSERT INTO paquete (nombre, precio, descripcion, imagen) VALUES(?,?,?,?)";
    return this.db.executeSql(sql, [paquete.nombre, paquete.precio, paquete.descripcion, paquete.imagen]);
  }

  insertM(paquete: PaqueteM) {
    const sql = "INSERT INTO paquete (nombre, precio, descripcion, imagen) VALUES(?,?,?,?)";
    return this.db.executeSql(sql, [paquete.nombre, paquete.precio, paquete.descripcion, paquete.imagen]);
  }

  update(paquete: PaqueteSQL) {
    const sql = "UPDATE paquete set nombre = ?, precio = ?, descripcion = ?, imagen = ? WHERE id = ?";
    return this.db.executeSql(sql, [paquete.nombre, paquete.precio, paquete.descripcion, paquete.imagen, paquete.id]);
  }

  delete(paquete: PaqueteSQL) {
    const sql = "DELETE from paquete WHERE id = ?";
    return this.db.executeSql(sql, [paquete.id]);
  }

  // delete(id: number) {
  //   const sql = "DELETE paquete WHERE id = ?";
  //   return this.db.executeSql(sql, [id]);
  // }

  paqueteById(id: number): Promise<PaqueteSQL> {
    const sql = "SELECT * FROM paquete WHERE _id = ?";
    return this.db.executeSql(sql, [id]).then(results => {
      let paquete = null;
      if (results.rows.length > 0) {
        paquete = results.rows.item(0);
      }
      return Promise.resolve(paquete);
    });
  }

  all(): Promise<PaqueteSQL[]> {
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