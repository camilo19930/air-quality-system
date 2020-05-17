import { Injectable } from '@angular/core';
import { Estacion } from './estacion';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstacionService {

  private urlEndPoint = 'http://test.denkitronik.com/sistema.backend/api/estacion';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private clienteHttp: HttpClient) {
  }
  // Lista las estaciones que están guardadas mientras el servidor de angular esta iniciado
  getEstaciones(): Observable<Estacion[]> {
    return this.clienteHttp.get<Estacion[]>(this.urlEndPoint);
  }
  // Función con la cual creamos la estaciones en el backend
  create(estacion: Estacion): Observable<Estacion> {
    return this.clienteHttp.post<Estacion>(this.urlEndPoint, estacion, { headers: this.httpHeaders });
  }
  // Función con la cual traemos la estaciones desde el backend de manera asincrona
  getEstacion(id): Observable<Estacion> {
    return this.clienteHttp.get<Estacion>(`${this.urlEndPoint}/${id}`);
  }
  //  Función para actualizar un registro
  updateEstacion(estacion: Estacion): Observable<Estacion> {
    // tslint:disable-next-line: max-line-length
    console.log('Mensaje: ' + estacion.estado + ' ' + estacion.id + ' ' + estacion.ubicacion + ' ' + estacion.descripcion + ' Estacion:' + estacion);
    console.log(' Información de estación' + JSON.stringify(estacion));
    return this.clienteHttp.put<Estacion>(`${this.urlEndPoint}/${estacion.id}`, estacion, { headers: this.httpHeaders });
  }
  delete(id: number): Observable<Estacion> {
    console.log(`${this.urlEndPoint}/${id}`);
    return this.clienteHttp.delete<Estacion>(`${this.urlEndPoint}/${id}`, { headers: this.httpHeaders });
  }
}
