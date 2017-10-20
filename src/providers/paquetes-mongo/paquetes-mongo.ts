import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaqueteM } from '../../providers/paquetes-mongo/paqueteM';

@Injectable()
export class PaqueteMongoProvider {

  //url = "http://localhost:3000/api/paquetes"
  url = "http://192.168.43.93:3000/api/paquetes"
  
    constructor(public http: HttpClient) {}
  
    all(){
      return this.http.get<PaqueteM[]>(this.url)
    }
  
    insert(paquete:PaqueteM){
      return this.http.post<SimpleResponse>(this.url, paquete)
    }

}


export class SimpleResponse{
  success:boolean;
  err:string;
}