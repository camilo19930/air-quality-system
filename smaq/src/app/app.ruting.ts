import { MapComponent } from './map/map.component';
// Aca va toda la configuracion de rutas
// importar modulos del ruter de angular

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// importamos componentes
import { EstacionComponent } from './estacion/estacion.component';
import { FormComponent } from './estacion/form.component';
import { HomeComponent } from './home/home.component';
import { GraficasComponent} from './graficas/graficas.component';
import { JustificacionComponent } from './justificacion/justificacion.component';
import { EducacionComponent } from './educacion/educacion.component';

// Array de rutas
const appRoutes: Routes = [


    {
      path: 'reportes',
      component: GraficasComponent
    },
    {
        path: 'estacion',
        component: EstacionComponent
    },
    {
      path: 'home',
      component: HomeComponent
    },
      {
        path: 'crearEstacion',
        component: FormComponent
    },
      {
        path: 'crearEstacion/form/:id',
        component: FormComponent
    },
    {
      path: 'mapa',
      component: MapComponent
    },
    {
      path: 'justificacion',
      component: JustificacionComponent
    },
    {
      path: 'educate',
      component: EducacionComponent
    },
    {
      path: '',
      component: HomeComponent
    }
];

// modulo routing servicios
export const appRoutingProviders: any[] = [];
// exportamos modulo
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
