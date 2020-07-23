import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Dispositivo } from '../../graficas/dispositivo';
import { Lectura } from '../../graficas/lectura';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GraficaService {

  // private urlEndPoint = 'http://test.denkitronik.com/sistema.backend/api/estacion';
  private urlEndPoint = 'http://DESKTOP-8PA8V32:8080/sistema.backend_dispositivo-0.0.1-SNAPSHOT/api/dispositivo/';
  private urlEndPointLectura = 'http://192.168.43.125:8080/sistema.backend_dispositivo/api/lecturas';
  private urlEndPointLectura2 = 'http://test.denkitronik.com/sistema.backend_dispositivo/api/lecturas';

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private clienteHttp: HttpClient) { }

  getDispositivos(): Observable<Dispositivo[]> {
    return this.clienteHttp.get<Dispositivo[]>(this.urlEndPoint);
  }
  // Función con la cual traemos la estaciones desde el backend de manera asincrona
  //  obtenerDispositivos(): Observable<Dispositivo> {
  //    console.log('getDispositivo service');
  //    let response;
  //    response =  this.clienteHttp.get<Dispositivo>(`${this.urlEndPoint}`);
  //    console.log('getDispositivo service ', response);
  //    return response;
  // }

  getLecturas(id): Observable<Lectura> {
    return this.clienteHttp.get<Lectura>(`${this.urlEndPointLectura}/${id}`);
  }

  // async obtenerDispositivos(){
  //   let response = await this.clienteHttp.get(this.urlEndPoint).toPromise();
  //   return  response;
  // }
  // async obtenerLecturas(id:any){
  //   let response = await this.clienteHttp.get(this.urlEndPointLectura+'/'+id).toPromise();
  //   // let response = this.clienteHttp.get<Lectura>(`${this.urlEndPointLectura}/${id}`);
  //   return  response;
  // }
  async obtenerDispositivos() {
    return await this.clienteHttp.get(this.urlEndPoint).toPromise();
  }
  async obtenerLecturas(id: any) {
    return await this.clienteHttp.get(`${this.urlEndPointLectura2}/${id}`).toPromise();
    // let response = this.clienteHttp.get<Lectura>(`${this.urlEndPointLectura}/${id}`)
  }
  async obtenerPromedios(estacion: number, fechaInicial: any, fechaFinal: any) {
    const data = '';
    return await this.clienteHttp.post(
      `${this.urlEndPointLectura2}/${estacion}?fechaInicial=${fechaInicial}&fechaFinal=${fechaFinal}`, data).toPromise();
  }
}
//http://DESKTOP-8PA8V32:8080/sistema.backend_dispositivo/api/lecturas/1?fechaInicial=01-05-2020&fechaFinal=30-07-2020