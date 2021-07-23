import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// componentes  de este modul
import { BasicosComponent } from './basicos/basicos.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { SwitchesComponent } from './switches/switches.component';


const routes: Routes = [

  { // no se que path le voy a dar - se le voy a dar en paths princiapales es decir primer segmento del path es el que va cargar este modulo
    path: '',
    children: [
      { path: 'basicos', component: BasicosComponent },
      { path: 'dinamicos', component: DinamicosComponent },
      { path: 'switches', component: SwitchesComponent },
      { path: '**', redirectTo: 'basicos' }
    ]
  }

];



@NgModule({

  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [

  ]
})
export class ReactiveRoutingModule { }
