import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: any;
  public password: any;
  public email: any;
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  login(form: NgForm) {
    let message;
    if (form.invalid) {
      return;
    } else {
      Swal.fire({
        allowOutsideClick: true,
        type: 'info',
        text: 'Por favor espere!'
      });
      Swal.showLoading();
      this.authService.login(this.password, this.user).
        subscribe(resp => {
          Swal.close();
          this.router.navigateByUrl('/estacion');
        }, (err) => {
          if (err.error.error.message === 'EMAIL_NOT_FOUND') {
            message = 'El email no fue encontrado';
          } else if (err.error.error.message === 'INVALID_PASSWORD') {
            message = 'La contraseña es incorrecta';
          } else {
            message = 'Credenciales incorrectas';
          }
          Swal.fire({
            allowOutsideClick: true,
            type: 'error',
            title: 'Error al autenticarse!',
            text: message
          });
        });
    }
  }
  registro() {
    let message;
    Swal.fire({
      allowOutsideClick: true,
      type: 'info',
      text: 'Por favor espere!'
    });
    Swal.showLoading();
    this.authService.createUser(this.password, this.user).
      subscribe(resp => {
        Swal.close();
      }, (err) => {
        if (err.error.error.message === 'EMAIL_EXISTS') {
          message = 'El email ya esta registrado';
        }
        Swal.fire({
          allowOutsideClick: true,
          type: 'error',
          title: 'Error al crear la cuenta!',
          text: message
        });
      });
  }
}
