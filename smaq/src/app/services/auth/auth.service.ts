import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1';
  private apiKey = 'AIzaSyB-TinHJOHEfn2KwBFftwL050n9eotzcFQ';
  private userToken;

  constructor(private http: HttpClient) {
    this.leerToken();
  }
  //crear usuarios
  createUser(contrasena: string, correo: string) {
    const data = {
      email: correo,
      password: contrasena,
      returnSecureToken: true,
    };
    return this.http.post(
      `${this.url}/accounts:signUp?key=${this.apiKey}`, data).pipe(
        map(resp => {
          this.guardarToken(resp['idToken']);
          return resp;
        })
      );
  }

  // autenticar ususarios
  login(contrasena: string, correo: string) {
    console.log('parametros:', contrasena, '  ', correo);
    const data = {
      email: correo,
      password: contrasena,
      returnSecureToken: true,
    };
    return this.http.post(
      `${this.url}/accounts:signInWithPassword?key=${this.apiKey}`, data).pipe(
        map(resp => {
          this.guardarToken(resp['idToken']);
          return resp;
        })
      );
  }

  private guardarToken(idToken: string) {
    let hoy = new Date();
    this.userToken = idToken;
    localStorage.setItem('token', idToken);
    hoy.setSeconds(3600);
    localStorage.setItem('expira', hoy.getTime().toString());
  }
  leerToken() {
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }
    return this.userToken;
  }
  logout() {
    localStorage.removeItem('token');
  }

  estaAutenticado() {
    if (this.userToken.length < 2) {
      return false;
    }
    const expira = Number(localStorage.getItem('expira'));
    const expiraDate = new Date();
    expiraDate.setTime(expira);
    
    if (expiraDate > new Date()) {
      return true;
    } else {
      return false;
    }
  }
}
