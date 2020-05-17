import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
// textos de enfermedades
public titEnf:string;
public contEnf1: string;
public contEnf2: string;
public contEnf3: string;
public contEnf4: string;
public contEnf5: string;
public contEnf6: string;
// textos de contaminantes
public titCont:string;
public subCont1:string;
public subCont2:string;
public subCont3:string;
public subCont4:string;
public subCont5:string;
public contCont1: string;
public contCont2: string;
public contCont3: string;
public contCont4: string;
public contCont5: string;
public contCont6: string;
//textos convenios
public titLey:string;
public subLey1:string;
public subLey2:string;
public subLey3:string;
public contLey1: string;
public contLey2: string;
public contLey3: string;
public contLey4: string;
public contLey5: string;
public contLey6: string;

//fuentes de información
  constructor() {
    this.textos();
 }


public textos(){
  //**informacion de enfermedade */
this.titEnf = "Enfermedades Causadas por la Mala Calidad del Aire";
this.contEnf1 = 'Estar expuestos a altos niveles de contaminación del aire es perjudicial para la salud y es la causante de gran variedad de enfermedades que padecen las personas en su día a día.';
this.contEnf2 = '“Según estimaciones de 2016, la contaminación atmosférica en las ciudades y zonas rurales de todo el mundo provoca cada año 4,2 millones de defunciones prematuras.” OMS';
this.contEnf3 = 'Las personas que más se ven afectadas por este tipo de contaminación son las que ya están enfermas, los niños, los ancianos y las personas de escasos recursos. ';
this.contEnf5 = 'A continuación, veremos las principales enfermedades causadas por la mala calidad del aire:';
this.contEnf6 = 'Es hora de tomar conciencia y ayudar a mejorar el aire que respiramos para esto podemos tomar medidas como movilizarnos en transporte público o en bicicleta, evitar quemar basura y lo más importante concientizar a los demás.';
//* Información de contaminantes*/
this.titCont = 'Principales contaminantes del aire';
this.contCont1 = 'En el aire que respiramos existen muchos contaminantes que no vemos, pero entran a nuestro organismo y son causantes de molestias y enfermedades. Los principales agentes contaminantes del aire son: material particulado (PM), Monóxido de carbono (CO), dióxido de nitrógeno (NO) y Ozono (O3). Estos contaminantes se producen por dos fuentes principales: el humano y procesos naturales. ';
this.contCont2 = 'La contaminación causada por los humanos principalmente proviene de los medios de transporte que utilizan combustibles fósiles para su funcionamiento, dichas combustiones generan contaminantes como el CO y el NO y también las fabricas producen muchos contaminantes altamente nocivos para la salud y el medio ambiente. En la contaminación causada por procesos naturales tenemos las actividades volcánicas que arrojan altos niveles de azufre a la atmosfera, los incendios forestales y los procesos digestivos de los animales. A continuación, se detallan algunos de los contaminantes del aire más importantes.';
this.subCont1 = 'Material particulado (PM)';
this.contCont3 = 'Sin lugar a dudas es el contaminante que más afecta la salud humana, los principales componentes del PM son los sulfatos, los nitratos, el amoníaco, el cloruro de sodio, el hollín, los polvos minerales y el agua. Las partículas de PM se encuentran tamaños de 10 micrones o menos (≤ PM10) de 2.5 micrones o menos (≤ PM2.5) y de 1.0 micrones o menos (≤ PM1.0). El PM10 a pesar de que son partículas muy pequeñas solo logran llegar a los pulmones y alojarse en ellos, mientras que las partículas PM2.5 y PM1.0 al ser tan diminutas logran atravesar los pulmones y entrar en el sistema sanguíneo aumentando el riesgo de padecer enfermedades cardiovasculares, respiratorias y cáncer de pulmón ';
this.subCont2 = 'Dióxido de nitrógeno (NO2)';
this.contCont4 =  'El NO2 es un gas contaminante que se produce como consecuencia de los procesos de combustión de combustibles fósiles tales como (motores de vehículos, calefacción, generación de electricidad).Este gas provoca severas afecciones para en los bronquios e irritación en los pulmones.';
this.subCont3 = 'Monóxido de carbono (CO)';
this.contCont5 = 'El CO es un gas toxico peligroso en altas concentraciones para la vida humana y animal. Está compuesto de un átomo de carbono y un átomo de oxígeno. El monóxido de carbono es el resultado de la combustión incompleta que es combustión a bajas concentraciones de oxígeno, puede ser generado en la naturaleza por incendios forestales, actividades volcánicas. Pero el principal generador de emisiones CO es el humano debido a la quema de combustibles fósiles en los vehículos y la quema en los procesos industriales. En altas concentraciones puede afectar el torrente sanguíneo de los seres vivos reduciendo la capacidad de transportar oxígeno en la sangre, las personas que más se ven afectas por este gas son las que sufren de problemas cardiacos.';
this.subCont4 = 'Ozono (O3)';
this.contCont6 = 'El ozono es uno de los principales causantes del llamado smog. Éste se forma por la reacción con la luz solar (fotoquímica) de contaminantes como los óxidos de nitrógeno (NOx) procedentes de las emisiones de vehículos o la industria y los compuestos orgánicos volátiles (COV) emitidos por los vehículos, los disolventes y la industria. El ozono en altas concentraciones puede producir afectaciones en la salud humana tales como problemas respiratorios, asma, reducir función pulmonar y cáncer de pulmón.';
//* Informacion de convenios */
this.titLey = 'Acuerdos internacionales';
this.contLey1 = 'Desde finales del siglo pasado la comunidad internacional comenzó a tomar iniciativas para contrarrestar el aumento de la contaminación del aire. Colombia también se ha sumado a algunos de esos convenios. A continuación, se muestra una breve introducción de cada uno de ellos.';
this.subLey1 = 'Agenda 2030 y los Objetivos de Desarrollo Sostenible Una oportunidad para América Latina y el Caribe';
this.contLey2 = 'La Agenda 2030 para el Desarrollo Sostenible, aprobada por la Asamblea General de las Naciones Unidas, establece una visión renovadora hacia la sostenibilidad económica, social y ambiental. En materia Ambiental la agenda 2030 establece unos objetivos tales como Aumentar la educación en materia ambiental, incorporar políticas, estrategias y planes ambientales.';
this.subLey2 = 'Iniciativa Latinoamericana y Caribeña para el Desarrollo Sostenible Indicadores de seguimiento';
this.contLey3 = 'La Iniciativa Latinoamericana y Caribeña para el Desarrollo Sostenible (ILAC) formulada sobre la base de la Plataforma de Acción de Río de Janeiro hacia Johannesburgo 2002, reconoce la importancia de las actividades regionales que promueven el desarrollo sostenible. Su objetivo es adoptar medidas concretas en diferentes ámbitos del desarrollo sostenible como la diversidad biológica; los recursos hídricos; las ciudades sostenibles; los aspectos sociales (incluidas la salud y la pobreza); los aspectos económicos (incluida la energía) y los arreglos institucionales (incluidos el fomento de las capacidades, los indicadores y la participación de la sociedad civil), teniendo en cuenta la ética del desarrollo sostenible.';
this.subLey3 = 'Acuerdo Regional sobre el Acceso a la Información, la Participación Pública y el Acceso a la Justicia en Asuntos Ambientales en América Latina y el Caribe';
this.contLey4 = 'El objetivo de este acuerdo es garantizar los derechos al acceso de la información ambiental, participación pública en procesos de toma de decisiones ambientales y justicia en temas ambientales.';
}
ngOnInit() {
    this.textos();
  }
}
