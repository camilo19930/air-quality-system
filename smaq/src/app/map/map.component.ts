import { ContainerComponent } from "./../container/container.component";
import { Estacion } from "./../estacion/estacion";
import { Component, OnDestroy, OnInit, ElementRef } from "@angular/core";
import { EstacionService } from "../estacion/estacion.service";
import { IMqttMessage, MqttService } from "ngx-mqtt";
import { Subscription } from "rxjs";
import { element } from "protractor";
import { dashCaseToCamelCase } from "@angular/compiler/src/util";

declare let L;

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"]
})
export class MapComponent implements OnInit, OnDestroy {
  public estaciones: Estacion[];
  public tipoEstacion: boolean;
  public tipoContaminante: boolean;
  public opcionEstacion: string;
  public opcionContaminante: string;
  public rutaImg: string;
  public co: any = 20;
  public ecuacion: any = 300000;
  private map; ///< Atributo que representa el mapa
  //private marcador;                   ///< Marcador de ejemplo
  //private popup; ///< Popup del marcador de ejemplo
  private subscription: Subscription; ///< Suscripción al topic MQTT
  private msg: any; ///< Guarda el mensaje recibido del topic seleccionado
  public colorCalidad: string;
  public flecha: string;
  public opc_btn_flecha: string;
  public cambioImagen: string;
  //info del sensor
  public lecturaCo: any;
  public lecturaCo2: any;
  public lecturaPm1: any;
  public lecturaPm25: any;
  public lecturaPm10: any;
  public dioxidoNitrogeno: any;
  public ica: any;
  public volatiles: any
  constructor(
    private estacionService: EstacionService,
    private _mqttService: MqttService,
    private elementRef: ElementRef
  ) {
    this.tipoEstacion = false;
    this.tipoContaminante = false;
    this.opcionEstacion = "";
    this.opcionContaminante = "";
    this.rutaImg = "";
    this.colorCalidad = "";
    this.flecha = "assets/img/cerrar.png";
    this.opc_btn_flecha = "assets/img/cerrar.png";
    this.cambioImagen = "assets/img/tablaPdf.png";
    // opciones popup

    //Código que permite la suscripción a un topic MQTT usando los datos de la conexión establecidos en app.module usando reactive
    this.subscription = this._mqttService
      .observe("aqs/sensorpm")
      .subscribe((message: IMqttMessage) => {
        console.log("Llegó el mensaje: " + message.payload.toString());
        try {
          this.msg = JSON.parse(message.payload.toString());
          console.log('MENSAJE ', this.msg);
          this.seleccionarColor(this.msg);

          // this.popup.setContent("<p>" + this.msg.aqi + "</p>").update();
        } catch (e) {
          console.log("Error el JSON recibido del servidor no es valido");
        }
      });
  }

  /*
 Metodo para seleccionar el color del marcador de acuerdo a la lectura recibida
 */
  public seleccionarColor(indiceGeneral) {
    this.llenarLecturas(indiceGeneral);
    var indice = indiceGeneral.aqi;
    if (indice >= 0 && indice <= 50) {
      this.colorCalidad = " #15cf20";
    } else {
      if (indice >= 51 && indice <= 100) {
        this.colorCalidad = "#f7ec09";
      } else {
        if (indice >= 101 && indice <= 150) {
          this.colorCalidad = "#f94303";
        } else {
          if (indice >= 151 && indice <= 200) {
            this.colorCalidad = "#f90303";
          } else {
            if (indice >= 201 && indice <= 300) {
              this.colorCalidad = "#f90303";
            } else {
              if (indice >= 201 && indice <= 300) {
                this.colorCalidad = "#f90303";
              } if (indice >= 301 && indice <= 500) {
                this.colorCalidad = "#7e03f9";
              } else {
                this.colorCalidad = "#9c9c9c";
                console.log("Color gris =  	Estacion desactivada ");
              }
            }
          }
        }
      }
    }

    //Inicio Se barre el arreglo de estaciones
    let longitud: string;
    let latitud: string;
    let i: number = 0;
    for (let estacion of this.estaciones) {
      if (this.estaciones[i].estado == false) {
        i++;
      } else {
        latitud = estacion.ubicacion.substring(0, 8);
        longitud = estacion.ubicacion.substring(9, 20);
        var myIcon = L.divIcon({
          html:
            '<div style= " margin: -5px 0px 0px 0px; width: 40px; height: 40px; background:#c1c1c1; border: 5px solid transparent; border-radius:30px; aling-content:center;"><div class="DivMarker" style="background:' +
            this.colorCalidad +
            '; margin:auto; border: 4px solid white; width: 30px; height: 30px; border-radius: 26px; aling-content:center;"><p style=" margin-top:3px; margin-left:5px; font-size:10px; font-weight: bold; width: 45px;">' +
            indice +
            "</p></div></div>",
          className: "my-div-icon"
        });
        var marker = L.marker([latitud, longitud], { icon: myIcon })
          .addTo(this.map);
        // .addTo(this.map)
        // .bindPopup(this.popup);

        marker.on("click", function (e) {
          //obtengo la etiqueta del html y la sobre escribo con los valores que llegan por mqtt
          /**Llenar informacion especifica */
          document.getElementById("tablaDetallada").style.display = 'block';
          var nomEstacion = document.getElementById("nomEstacion");
          var fechaInstall = document.getElementById("fechaInstall");
          var coordenadas = document.getElementById("coordenadas");
          nomEstacion.innerHTML = "Estación " + estacion.descripcion;
          fechaInstall.innerHTML = "Fecha Instalación: " + estacion.fechaInstalacion;
          coordenadas.innerHTML = "Ubicación: " + estacion.ubicacion;
          var imagenEstacion = document.getElementById("imagenEstacion");

          if (estacion.id == 2) {
            imagenEstacion.setAttribute("src", "assets/img/estacionSalidaSur.JPG");
          } else {
            imagenEstacion.setAttribute("src", "assets/img/estacionCentro.JPG");
          }
        }
        );

        i++;
      }
    }
  }


  llenarLecturas(indiceGeneral) {
    this.ica = indiceGeneral.aqi;
    this.lecturaCo = indiceGeneral.avg_1h_co;
    this.lecturaCo2 = indiceGeneral.avg_1h_eco2;
    this.lecturaPm1 = indiceGeneral.pm1;
    this.lecturaPm25 = indiceGeneral.aqi_pm25_24h;
    this.lecturaPm10 = indiceGeneral.aqi_pm10_24h;
    this.dioxidoNitrogeno = indiceGeneral.avg_1h_no2;
    this.volatiles = indiceGeneral.avg_1h_tvoc;
  }
  /**
   * Método que genera el mapa LeafLet en el componente map
   */
  public generarMapa() {
    //Renderizamos el mapa en el centro de la ciudad de Tulua
    this.map = L.map("map").setView([4.071871, -76.178937], 13);
    // this.popup = L.popup().setContent(
    //   "<p>Adquiriendo datos<br />Conectándose al sistema.</p>"
    // );
    //Créditos para los desarrolladores
    //@todo faltamos nosotros
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
    this.map.scrollWheelZoom.disable(); // deshabilita el zoom por medio del scroll
  }
  async ngOnInit() {
    await this.obtenerEstaciones();
    this.tamañoPantalla();
  }
  async obtenerEstaciones() {
    this.estacionService.getEstaciones().subscribe(estaciones => {
      console.log("Datos recibidos ::: ", JSON.stringify(estaciones));
      this.estaciones = estaciones;
      this.generarMapa();
    });
  }
  public tamañoPantalla() {
    var ancho = screen.width;
    var contInfoCel = document.getElementById("contenedor_informacion");
    if (ancho <= 400) {
      contInfoCel.style.width = "0px";
      this.flecha = "assets/img/abrir.png";
      this.opc_btn_flecha = "assets/img/abrir.png";
    }
  }
  /**
   * Este metodo define la ruta de la imagen que se va a ver en el modal
   */
  public ruta() {
    this.rutaImg = this.cambioImagen;
  }

  /**
   * Metodo para publicar un mensaje en el topic señalado
   * @param topic Topic al cual publicar
   * @param message Mensaje a enviar
   */
  public publicar(topic: string, message: string): void {
    this._mqttService.unsafePublish(topic, message, { qos: 2, retain: true });
  }

  /**
   * Método del ciclo de vida de ng cuando se destruye el componente
   */
  public ngOnDestroy() {
    //Se de-suscribe del topic seleccionado
    this.subscription.unsubscribe();
  }
  /**
   * Este metodo me permite ocultar el contenedor que de información que se encuentra en el lado derecho del mapa,
   * tambien aca se ajusta su tamaño en caso de que el ancho de la pantalla sea menor 415px
   */
  public ocultar_contenedor() {
    var anchoPatalla = screen.width;
    var contenedor_informacion = document.getElementById("contenedor_informacion");
    var informacion = document.getElementById("informacion");
    if (anchoPatalla > 415) {
      if (this.opc_btn_flecha == "assets/img/cerrar.png") {
        contenedor_informacion.style.width = "0px";
        contenedor_informacion.style.webkitTransition = "width 2s";
        contenedor_informacion.style.transition = "width 2s";
        informacion.style.width = "0px";
        informacion.style.height = "80%";
        informacion.style.webkitTransition = "width 2s";
        informacion.style.transition = "width 2s";
        informacion.style.overflowX = "hidden";
        informacion.style.overflowY = "hidden";
        this.flecha = "assets/img/abrir.png";
        this.opc_btn_flecha = "assets/img/abrir.png";
      } else {
        contenedor_informacion.style.width = "400px";
        informacion.style.width = "380px";
        this.flecha = "assets/img/cerrar.png";
        this.opc_btn_flecha = "assets/img/cerrar.png";
      }
    } else {
      if (this.opc_btn_flecha == "assets/img/cerrar.png") {
        contenedor_informacion.style.width = "0px";
        contenedor_informacion.style.webkitTransition = "width 2s";
        contenedor_informacion.style.transition = "width 2s";
        informacion.style.overflowX = "hidden";
        informacion.style.overflowY = "hidden";
        informacion.style.width = "0px";
        informacion.style.height = "90%";
        informacion.style.webkitTransition = "width 2s";
        informacion.style.transition = "width 2s";
        this.flecha = "assets/img/abrir.png";
        this.opc_btn_flecha = "assets/img/abrir.png";
      } else {
        contenedor_informacion.style.width = "330px";
        contenedor_informacion.style.webkitTransition = "width 2s";
        contenedor_informacion.style.transition = "width 2s";
        informacion.style.width = "310px";
        informacion.style.height = "90%";
        this.flecha = "assets/img/cerrar.png";
        this.opc_btn_flecha = "assets/img/cerrar.png";
      }
    }
  }

  /**
   * Por medio de este metodo cambio el div de información general a información detallada y viceversa
   * @param num
   */
  public cambiarInformacion(opc) {
    var btn_info_general = document.getElementById("btn_info_general");
    var btn_info_especifica = document.getElementById("btn_info_especifica");
    var informacion_general = document.getElementById("informacion_general");
    var informacion_detallada = document.getElementById(
      "informacion_detallada"
    );

    if (opc == 1) {
      btn_info_especifica.style.background = "white";
      btn_info_general.style.background = "rgba(3, 3, 3,0.5)";
      informacion_general.style.width = "350px";
      informacion_general.style.height = "80%";
      informacion_general.style.visibility = "visible";

      informacion_detallada.style.width = "0px";
      informacion_detallada.style.height = "0%";
      informacion_detallada.style.visibility = "hidden";
    } else {
      btn_info_general.style.background = "white";
      btn_info_especifica.style.background = "rgba(3, 3, 3,0.5)";
      informacion_detallada.style.width = "350px";
      informacion_detallada.style.height = "80%";
      informacion_detallada.style.visibility = "visible";

      informacion_general.style.width = "0px";
      informacion_general.style.height = "0%";
      informacion_general.style.visibility = "hidden";
    }
  }

  /**
   *  Este metodo me permite cambiar la imagen del visor de imagenes inferior  izquierdo
   */
  public cambioImagenInfo() {
    if (this.cambioImagen == "assets/img/tablaPdf.png") {
      this.cambioImagen = "assets/img/tabla.png";
    } else {
      this.cambioImagen = "assets/img/tabla.png";
    }
  }
}
