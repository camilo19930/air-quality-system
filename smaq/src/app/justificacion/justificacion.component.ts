import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-justificacion',
  templateUrl: './justificacion.component.html',
  styleUrls: ['./justificacion.component.css']
})
export class JustificacionComponent implements OnInit {

  public textoJustificacion: string;
  public texto1: string;
  public texto2: string;
  public texto3: string;
  public texto4: string;
  public rutaImg: string;

  constructor() {
    this.rutaImg = '';
    this.textoJustificacion = '';
    this.texto1 = '';
    this.texto2 = '';
    this.texto3 = '';
    this.texto4 = '';
  }

  ngOnInit() {
    this.texto();
  }

  public ruta( num ) {
    switch ( num ) {
       case 1:
           this.rutaImg = 'assets/img/estadio.jpg';
           break;
       case 2:
           this.rutaImg = 'assets/img/motos_tulua.jpg';
           break;
       case 3:
            this.rutaImg = 'assets/img/montañas.jpg';
            break;
    }
    console.log('Valor: ' + this.rutaImg + ' el numero ' + num);
   }
   public texto() {
     this.texto1 = 'En realidad, la justificación del proyecto SMAQ es muy simple y conocida por todos. ¡El planeta pide auxilio!. En la actualidad vivimos en un planeta que está muy contaminado gracias a nosotros los seres humanos. A diario observamos en los medios decomunicación reportajes sobre el estado del aire que respiramos, las enfermedades que produce, el cambio en los paisajes de las ciudades y losanimales que muriendo. Quedamos horrorizados con este panorama tan desolador, pero continuamos sin tomar conciencia, no cambiamos nuestros hábitospor el contrario continuamos contaminandoLas cifras de la organización mundial de la salud OMS no son muy alentadoras ya que al año 2016 afirman que una de cada nueve muertes a nivel mundialtiene relación con la contaminación atmosférica. En total 7 millones de muertes en el mundo son atribuidas a la contaminación atmosférica afirma la ';
     this.texto2 ='La exposición a altos niveles de contaminación del aire puede causar una serie de enfermedades tales como infecciones respiratorias, accidentescerebrovasculares, enfermedades cardiacas y cáncer de pulmón ';
     this.texto3 = 'El contaminante más nocivo para la salud es el material particulado 2.5 (PM2.5) emitido por la combustión por los combustibles fósiles tales como carbón y gasolina.Los últimos años para Colombia han sido duros en materia de contaminación ambiental debido a que en las grandes ciudades como Bogotá, Medellín y Cali se han disparado lasalarmas por la mala calidad del aire que respiran sus habitantes. El Informe Carga de Enfermedad Ambiental en Colombia realizado por el Observatorio Nacional de Salud del Instituto Nacional de Salud ';
     this.texto4 = 'estableció que 17.549 muertes en el país con a causa de la mala calidad del aire y del agua, esta cifra es el 8% del total de las muertes del país.Por tal motivo el país en general necesita conocer la calidad del aire que respiran sus habitantes, no solo en las principales ciudades sino en todo en todas las regiones puesto que este fenómenono va a decrecer si no se toman acciones de mejora, pero ¡Cómo tomar acciones de mejora si no conocemos como se encuentra el aire que respiramos! Gracias a esta interrogante surge el proyecto SMAQ elcual sirve para conocer en tiempo real la calidad del aire en los distintos puntos de la ciudad donde se instalen las estaciones, brindando datos con los cuales se pueden tomar acciones para contrarrestar este la mala calidad del aire. ';
  }


}
