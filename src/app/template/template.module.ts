import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // permitr directicas , pipes , entre otras cosas
import { FormsModule } from '@angular/forms';


import { TemplateRoutingModule } from './template-routing.module';




// Componentes de ste module
import { BasicosComponent } from './basicos/basicos.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { SwitchesComponent } from './switches/switches.component';

// directiva - se declara - no se importa con los modulos
import { CustomMinDirective } from './directives/custom-min.directive';


@NgModule({
  declarations: [
    BasicosComponent,
    DinamicosComponent,
    SwitchesComponent,

    CustomMinDirective // directiva perzonalizada : para llevar control deun input

  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    FormsModule // se puede importar de forma global en el modul principal . pero usualmente se importa en el modulo donde vamos a trabajar con form de angular

  ]
})
export class TemplateModule { }
