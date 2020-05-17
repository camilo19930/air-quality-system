import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public nombres = 'Camilo Baquero, Marcela Tamayo y Alvaro Salazar';

  constructor() {
   }

  ngOnInit() {
  }

}
