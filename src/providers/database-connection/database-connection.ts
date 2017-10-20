import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Injectable()
export class DatabaseConnectionProvider {

  db: SQLiteObject;

  constructor() { }

  getConnection(): Promise<SQLiteObject> {
    if(this.db){
      return Promise.resolve(this.db);
    }else{
      const sqlite = new SQLite();
      return sqlite.create({
        name: 'paquetes.db',
        location: 'default'
      }).then(db => {
        this.db = db;
        return this.init().then(res=>{
          return Promise.resolve(db);
        });        
      })
    }
  }

  init():Promise<any> {
    const sql = "CREATE TABLE IF NOT EXISTS paquete ("
      + "id INTEGER PRIMARY KEY AUTOINCREMENT"
      + ", _id VARCHAR"      
      + ", nombre VARCHAR"
      + ", precio FLOAT"
      + ", descripcion VARCHAR"      
      + ", imagen VARCHAR"       
      + ")";
    return this.db.executeSql(sql, []);    
  }

//  executeSql(sql:string, params:any[]):Promise<any>{
//    if(this.db!=null)
//      return this.db.executeSql(sql,params);
//    else
//      return Promise.reject("no connected..")
//  }

}
