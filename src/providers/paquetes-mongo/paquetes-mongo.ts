import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paquete } from '../../providers/paquetes-mongo/paqueteM';

@Injectable()
export class PaqueteMongoProvider {

  url = "http://localhost:3000/api/paquetes"
  
    constructor(public http: HttpClient) {}
  
    all(){
      return this.http.get<Paquete[]>(this.url)
    }
  
    insert(paquete:Paquete){
      return this.http.post<SimpleResponse>(this.url, paquete)
    }

}

export class SimpleResponse{
  success:boolean;
  err:string;
}