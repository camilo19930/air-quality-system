
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public textEnfer:string;
  public titEnfer:string;
  public textCont:string;
  public titCont:string;
  public textTra:string;
  public titTra:string;
  public titDesc:string;
  public textDesc1:string;
  public textDesc2:string;
  public textDesc3:string;

  constructor() {
    this.textos();
   }
   public textos(){
    this.titEnfer = 'Enfermedades Causadas por la Mala Calidad del Aire';  
    this.textEnfer = 'Estar expuestos a altos niveles de contaminación del aire es perjudicial para la salud y es la causante de gran variedad de enfermedades';
    this.textCont = 'En el aire que respiramos existen muchos contaminantes que no vemos, pero entran a nuestro organismo y son causantes de molestias y enfermedades. Los principales agentes contaminantes del aire son: material particulado (PM), ...';
    this.titCont = 'Principales contaminantes del aire';
    this.textTra =  'Desde finales del siglo pasado la comunidad internacional comenzó a tomar iniciativas para contrarrestar el aumento de la contaminación del aire. Colombia también se ha sumado a algunos de esos convenios. A continuación, se muestra una breve introducción de cada uno de ellos.';
    this.titTra = 'Acuerdos internacionales';
    this.titDesc = 'Proyecto System monitory air quality SMAQ';
    this.textDesc1 = 'El Proyecto SMAQ es creado por dos estudiantes de ingeniería de sistemas de la Unidad Central del Valle del Cauca UCEVA Edwin Camilo Baquero y Marcela Tamayo y el docente Alvaro Salazar. ';
    this.textDesc2 = 'Debido a los altos grados de contaminación, una de las problemáticas que más agobia hoy el planeta y de la falta de procesos que ayuden a contrarrestarlo, nace Smaq como herramienta proveedora de información requerida por los entes ambientales y gubernamentales de la ciudad. Smaq “Air Quality Monitoring System” tiene como objetivo brindar información en tiempo real de agentes contaminantes como monóxido de carbono, dióxido de carbono y material particulado (PM) generados principalmente por el parque automotor. Dicho proyecto consiste en la instalación de dos estaciones en la ciudad de Tuluá encargadas de monitorear los agentes contaminantes mencionados anteriormente y posteriormente enviar esa información a un servidor por medio de la tecnología del internet de las cosas. ';
    this.textDesc3 = 'Así mismo, permitir que los habitantes de la ciudad visiten la página web y conozcan el impacto negativo que tienen sus conductas y de alguna manera concientizar y lograr obtener mejores índices de calidad en el aire.';
  }
  ngOnInit() {
  }


}
