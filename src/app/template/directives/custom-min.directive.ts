import { Directive, Input } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator } from '@angular/forms';
// validator es un objeto viene en angular para realizar estos tipos de validaciones

//Decorador
@Directive({
    selector: '[customMin][ngModel]', // es la manera de decir a angular como detectar y utulizar mi directiva perzonalizada -[ngModel] debe ser declarada sino no entra a esta directiva
    providers: [{ // aqui ocupamos ponerle ciertas dependencias a esta directiva
        provide: NG_VALIDATORS, // especificar el servicio que necesito injectar : en este caso seria Validator
        useExisting: CustomMinDirective,
        multi: true
    }]
})
export class CustomMinDirective implements Validator { // implemento validator paraque esta clase extienda el formulario


   /*
    * necesito recibir [minimo] , uso : @input : para poder recibirlo del padre
    */
    @Input() minimo!: number;

    constructor() {
     // console.log('Directiva', this.minimo ); // porque undefined - al momento de crear el componente donde esta usada esta directiva no tenia valor .
    }

    validate( control: FormControl ) { // esta funcion esta extendida de la interfaz que implementamos Validator , control : es el elemento html : es el input donde implemenatmos esta directiva perzonalizada
     // console.log(this.minimo); // a esta altura ya nos undefines el valor ya esta establecido

      const inputValue = control.value;
     // console.log(inputValue);


      return ( inputValue < this.minimo )
                ? { 'customMins': true } // regresar un objeto con error
                : null; // para decir que el error paso - no hay ningun error  de validacion
    }

}
/*
 * nombre del archivo no  segnifica nada , solo paraque nosotros sabemos que es una directiva
 * recuerda todo en angular es classe , quien dice a angula que esta es una clase directiva : el decorador quien dice a angular de que tipo de class se trata
 * en este caso se trata de una clase directiva
 * no olvidar de importar la directiva en el modulo - occupar que angular conosca esta directiva - se declara con los componentes - no se importar con los modulos
 *
*/
