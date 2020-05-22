import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public user: any;
public password: any;
public usuarioMaster: any;
public passwordMaster: any;
  constructor() {
    this.usuarioMaster = 'ebaquero';
    this.passwordMaster = 'baquero';
    this.user = '';
    this.password = '';
  }

  ngOnInit() {
  }

  login() {
    if(this.usuarioMaster != this.usuarioMaster || this.password != this.passwordMaster) {
      alert('Credenciales incorrectas');
    }else {
      console.log(this.user, '        ', this.password);
      window.location.href = 'http://localhost:4200/menuLogin';
    }
    
  }

}
