import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-login',
  templateUrl: './menu-login.component.html',
  styleUrls: ['./menu-login.component.css']
})
export class MenuLoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  usuario(){
    window.location.href = 'http://localhost:4200/menuLogin';
  }
  estacion(){
    window.location.href = 'http://localhost:4200/estacion';
  }
}
