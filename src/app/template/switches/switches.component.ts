import { Component } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent  {

  // lo que estamos haciendo asignando valores por defecto , para postear lso valores del estado del form implementamos nuestros funciones hemos visto bastante
  persona = {
    genero: 'F',
    notificaciones: true,
  }

  terminosYCondiciones: boolean = false;


}
