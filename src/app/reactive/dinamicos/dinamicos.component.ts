import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent  {

  miFormulario: FormGroup = this.fb.group({

    nombre    : [ '', [ Validators.required, Validators.minLength(3) ] ], // string vacio valor por default
    favoritos : this.fb.array( [

      [ 'Metal Gear', Validators.required ], // index 0
      [ 'Death Stranding',Validators.required  ],

    ] , Validators.required ) // array(): primer arg es arreglo de de Favoritos [] requiere un idex no debe ser arreglo vacio . segundo arg es la validacion del mismo campo que es un array
       // arreglo vacio como value de favoritos : resuelta Valid prop del form Reactivo false .
  });


  /* crear un control independiente a un input : usando  FormBuilder : srevicio Injectado
   * podemos usar New FormControl ver : basicos pero como estamos trabajando con el servicio de FormBuilder siguemos con el
   *
  */
  nuevoFavorito: FormControl = this.fb.control('', Validators.required );


  /*  prop getter
   *  get() es un metodo por lo cual puedo agrrar un control propiemente del form preparado : evitar acceder desde el Objeto del formualrio
   * as FormArray : estamos ayudando ts deciendolo qeu el objeto favoritos es de tipo form Array
   *  Recordar que favoritos es un objeto apunta a un espacio de memoria : cualquier modificacion se hace en la refrencia directamente asi siclo de vida de deteccion de angular ..template .
  */
  get favoritosArr() {
    console.log(this.miFormulario.get('favoritos'))
    return this.miFormulario.get('favoritos') as FormArray;
  }


  /* occupo FormBuilder para la validacion - como es un servicio Injectable - pues lo injecto
   * gracias a las classes de este framwork trabajan en conjunto .
  */
  constructor( private fb: FormBuilder ) { }


  // Tambien hay personas que inician reset({}) los formularios en el Onginit o constructor es cosa de gustos del desarollador .



  /* uso para mostrar mensaje de err
   * true && true return true - ngif true = mostracion de mensaje
   * cuando copiamos y pegamos codigo que es exactamente el mismo como el caso de  esta fucion la hemos usado en from basicos : eso de paso a la optimisacion
   * es decir podiamos crear un servicio dentro de un proyecto grande consta de funciones solo para validaciones de forms
  */
  campoEsValido( campo: string ) {
    return this.miFormulario.controls[campo].errors
            && this.miFormulario.controls[campo].touched;
  }

  agregarFavorito() {
    if ( this.nuevoFavorito.invalid ) { return; }

    // this.favoritosArr.push( new FormControl( this.nuevoFavorito.value, Validators.required ) );
    this.favoritosArr.push( this.fb.control(this.nuevoFavorito.value, Validators.required ) );

    this.nuevoFavorito.reset();

  }

  borrar( i: number ) {
    this.favoritosArr.removeAt(i); // remueve algo en posicion index dada en el objeto Referido : this.favoritosArr
  }



  guardar() {

    if ( this.miFormulario.invalid ) {
      this.miFormulario.markAllAsTouched(); // marcar todos formControlName como touch
      return;
    }

    // imprimir el valor del formulario, sólo si es válido
    console.log(this.miFormulario.value);



    // posteo etc ... usar algun servicio http .

    // despeus vaciar

    // vaciar array
    let Arr = this.favoritosArr.controls;
    for (let i = Arr.length; i > 0; i--) {
      Arr.pop();
    }
    // vaciar prop nombre
    this.miFormulario.reset({
      nombre: ''
    })
    this.nuevoFavorito.reset();

  }

}
