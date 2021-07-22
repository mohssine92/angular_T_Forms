import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    genero: [ 'M', Validators.required ],
    notificaciones: [ true, Validators.required ],
    condiciones: [ false, Validators.requiredTrue ] // requirido es cuando tenga cualquier valor , pero la validacion del booleano ser tal cual : asi no tendremos problema en la validacion del formulario
  });

  persona = {
    genero: 'F',
    notificaciones: true,
  } // va ser valor de mi formulario


  constructor( private fb: FormBuilder ) { }



  /* como esblezco data a al formulario ? - usualmente para esblacer informacion lo vamos a hacer en el ng onit :
   * por ejemplo se va a la db , la db responde mediante en servicioRest con la data a establecer en el formulario
  */
  ngOnInit() {
    this.miFormulario.reset({ // resteamla refrencia y asigna el objeto de arg que estamos pasqando como nuevo estado
      ...this.persona,
      condiciones: false // referencia al objeto miFormulario , asi la prop condiciones calle encima de condiciones , obviamente condiciones es algo que no va venir en el objeto de la db
    });



    /* Recuerda estamos trabajando con formularios rectivos ,
    */
   // TODO : por alguna razon , Si queremos mantenernos sincronizados(en escucha) , cuando se cambia Ref.formulario se cambia objeto Persona: que va entrar ,  Gracias a RXJS
   // incluso se peude susbcribir al los cambios de un campo como condiciones video 258 : nota 1

    this.miFormulario.valueChanges.subscribe( ({ condiciones, ...rest }) => { // desestructuracion de next
      // delete form.condiciones;
      this.persona = rest;
    })

  }

  guardar() {

    const formValue = { ...this.miFormulario.value }; // siempre es bueno romnpemos la Relacion

    delete formValue.condiciones; // asi se elemina una prop de objeto
    //console.log(formValue);
    this.persona = formValue;

    // TODO : en este nivel se inject un servico de mis providers de angular  para request a un micro servicio : servicio rest para otros Procesos

  } // cuando posteo establezco data del referencia formulario al objeto persona , que debe ser entregado au servicoRest : para otros procesos o almacenamiento etc ...

}
