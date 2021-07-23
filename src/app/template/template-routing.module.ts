import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// Componentes de este module
import { BasicosComponent } from './basicos/basicos.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { SwitchesComponent } from './switches/switches.component';

const routes: Routes = [

  {
    path: '', // el path para cargar este modul me lo va dar la configuracion de las rutas principal .
    children: [
      { path: 'basicos', component: BasicosComponent },
      { path: 'dinamicos', component: DinamicosComponent },
      { path: 'switches', component: SwitchesComponent },
      { path: '**', redirectTo: 'basicos' },
    ]
  }

];



@NgModule({
  imports: [
    RouterModule.forChild(routes) // noten ng me creo con forChild porque sabe que es un modulo de rootas como segundarias
  ]
  // profe evito exportar la configuracion de router : dice ya esta en nivel global  ??? unica explicacion RouterModul lo hemos exportado al modul principal atraves del archivo router de las rutas  principal

})
export class TemplateRoutingModule { }
//ng g m template --routing => genera modulo con so modulo router
// recuerda cada archivo de confiuguracion de rutas esta importado en su modulo respectivo , lo que es esta lista para hacer lazyLoad
