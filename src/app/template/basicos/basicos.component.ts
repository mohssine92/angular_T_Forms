import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit { // recuerden que estamos en la paroximacion de template eso segnifica la mayoria de configuracion la voy a hacer del lado de html

  /* Decoradores :
   *  @Input()  : para recibir un elemento que viene del componente padre
   *  @Output() : esto es para emittir evento
   *  @ViewChild : le pasamos nombre del elemento que vamos a buscar , en este caso le pasamos referencia local .
    */
   /*  cuando digamos tener referencia de mi formulario en la parte de typescript - tener referencia del mismo en la class del component
    * en este comportamiento no veo ningun emission , estoy obteniendo objeto entero de un form que se consedira un componente hijo de este componente
    * en caso implemento validacion del formulario en template - no hace falta  tener Ref del mismo en class component
   */
  @ViewChild('miFormulario') miFormulario!: NgForm;




  initForm = { // this object is asocied with inputs of the form
    producto: /* 'RTX 4080ti' */'' ,
    precio: 0,
    existencias: 0
  }

  constructor() { }

  ngOnInit(): void {

  }
  nombreValido(): boolean { // ? lo que hace este signo dice si algun prop existe siguo eveluando , si algun es undefined paso sin lanzar error , porque estamos definiendo prop que no existen al principio ...
    return  this.miFormulario?.controls.producto?.invalid
            && this.miFormulario?.controls.producto?.touched;
  } // true , true

  precioValido():boolean {
    return  this.miFormulario?.controls.precio?.touched
            && this.miFormulario?.controls.precio?.value < 0 || //or 234
            this.miFormulario?.controls.precio?.touched
            && this.miFormulario?.controls.precio?.value == null ;
  }

  guardar( ) {   // mas informacion sobre objeto del form video: 232 nota
      console.log( this.miFormulario.form.value );

    /*
     * una vez se postea se guarda en backend - back-end responde . etcc
     * debo limpiar form de la forma correcta - estado inicial del form .
    */
    console.log('Posteo en back correcto');

    this.miFormulario.resetForm({
      producto: /* 'Algo' */'',
      precio: 0,
      existencias: 0
    });


  }


}
