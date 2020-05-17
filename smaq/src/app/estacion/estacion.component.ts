import swal from 'sweetalert2';
import { EstacionService } from './estacion.service';
import { ESTACION } from './estacion.json';
import { Component, OnInit } from '@angular/core';
import { Estacion } from './estacion';

@Component({
  selector: 'app-estacion',
  templateUrl: './estacion.component.html',
  styleUrls: ['./estacion.component.css']
})
export class EstacionComponent implements OnInit {

  // tslint:disable-next-line: max-line-length
  public estacion: Estacion[];
  constructor(private estacionService: EstacionService) { }

  ngOnInit() {
   this.estacionService.getEstaciones().subscribe(
    estacion => this.estacion = estacion
   );
  }

  public delete(estacion: Estacion): void {
      swal.fire({
      title: `Esta seguro de eliminar el registo ${estacion.descripcion}? `,
      text: 'si da en aceptar ya no podrá revertir los cambios',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
    }).then( (result) => {
      if (result.value) {
        this.estacionService.delete(estacion.id).subscribe(
          response => {
            this.estacion = this.estacion.filter( estacionAux => estacionAux !== estacion);
            swal.fire(
              'Estación eliminada',
              `Estación ${estacion.descripcion} eliminada con éxito`,
              'success'
            );
        }
        );
      } });
    }
}
