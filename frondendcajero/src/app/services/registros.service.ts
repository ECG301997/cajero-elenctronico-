import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { user } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class RegistrosService {
  urlPer = 'http://localhost:3000/api/registro'
   home=   ' http://localhost:3000/api/home'
  constructor(
    private http : HttpClient
  ) { }

  getUser():Observable<any>{
    return this.http.get(this.home);

  }
  insertUser(user : user):Observable<any>{
  return this.http.post(this.urlPer,user);

  }
  movimientos(documento : any):Observable<any>{
    return this.http.get(`${this.urlPer}/${documento}`)
  }

  
  retirarDinero(documento: any,valorRetiro : any){
    return this.http.post(this.home+'/'+documento,valorRetiro)
    }

    
    consignarDiner(documento: any,valorRetiro : any){
      let retiro =  `${this.home}/consignar`
      
      return this.http.post(retiro+'/'+documento,valorRetiro)

    }
    
  }


