import { EstacionService } from './estacion.service';
import { Estacion } from './estacion';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public titulo = 'Creación de Estación';
  // private estacion: Estacion = new Estacion();
  public estacion: Estacion = new Estacion();
  constructor(
    private estacionService: EstacionService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService) { }

  // Metodo para cargar la estacion seleccionada desde el backend la ui
  public cargarEstacion(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params.id;
      if (id) {
        // console.log('El Id: ' + id);
        this.estacionService.getEstacion(id).subscribe((estacion) => this.estacion = estacion);
      }
    });
  }
  public crear(): void {
    this.estacionService.create(this.estacion).subscribe(estacion => {
      this.router.navigate(['/estacion']);
      // console.log(estacion.descripcion + ' ' + estacion.estado + ' ' + estacion.fechaInstalacion + ' ' + estacion.ubicacion );
      swal.fire('Nueva estación', `La estación ${estacion.descripcion} se ha creado con éxito`, 'success');
    });
  }
  public update(): void {
    this.estacionService.updateEstacion(this.estacion).subscribe(estacion => {
      this.router.navigate(['estacion']);
      console.log(estacion.descripcion + ' ' + estacion.estado + ' ' + estacion.fechaInstalacion + ' ' + estacion.ubicacion);
      // tslint:disable-next-line: max-line-length
      swal.fire('Actualizacion de estación', ` Los datos de la estación  estación ${estacion.descripcion} fueron actualizados con éxito`, 'success');

    });
  }
  ngOnInit() {
    this.cargarEstacion();
  }
  salir() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
