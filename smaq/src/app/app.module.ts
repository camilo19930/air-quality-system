import {BrowserModule} from '@angular/platform-browser';
import {NgModule, Component} from '@angular/core';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {EstacionComponent} from './estacion/estacion.component';
import {EstacionService} from './estacion/estacion.service';
// import { RouterModule, Routes} from '@angular/router';
import {routing, appRoutingProviders} from './app.ruting';
import {HttpClientModule} from '@angular/common/http';
import {FormComponent} from './estacion/form.component';
import {FormsModule} from '@angular/forms';
import {MapComponent} from './map/map.component';
import {HomeComponent} from './home/home.component';
import {ChartsModule} from 'ng2-charts';
import {GraficasComponent} from './graficas/graficas.component';
import {JustificacionComponent} from './justificacion/justificacion.component';
import {EducacionComponent} from './educacion/educacion.component';
import {IMqttMessage,  MqttModule,  IMqttServiceOptions} from 'ngx-mqtt';
import { ContainerComponent } from './container/container.component';
import { LoginComponent } from './login/login.component';
import { DecimalPipe, CurrencyPipe, DatePipe, CommonModule } from '@angular/common';


export const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  hostname: 'iot.denkitronik.com',
  port: 1883,
  path: '',
  username: "usuario",
  password: "CoufKolcob8",
  reconnectPeriod: 2
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EstacionComponent,
    FormComponent,
    MapComponent,
    HomeComponent,
    GraficasComponent,
    JustificacionComponent,
    EducacionComponent,
    ContainerComponent,
    LoginComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    routing,
    FormsModule,
    ChartsModule,
    LeafletModule.forRoot(), // Importaciones para el mapa
    MqttModule.forRoot(MQTT_SERVICE_OPTIONS)
  ],
  providers: [
    EstacionService,
     appRoutingProviders,
     DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}



