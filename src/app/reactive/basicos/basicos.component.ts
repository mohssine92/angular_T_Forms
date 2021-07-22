import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  /*  miFormulario: FormGroup = new FormGroup({
      nombre     : new FormControl('RTX 4080ti'), html : con  formControlName , decirle explicitamente para asignacion de valores en input
     precio     : new FormControl(1500),
     existencias: new FormControl(5),
   })
  */ // este codigo usando formControl _ para forms sensillos - ahora pasamos a trabajar con FormBuilder : que es un servicio lo injectamos nos va ayudar trabajar con forms con bastantes
     //props y mas complejos - injeccion de servicio : va trabajar en conjunto con FormGroup para forms Reactivos



  /* Trabajar con la Injeccion de FormBuilder es mas sensillo mejor que trabajar con new FormControl
   * queda mas sensillo de vista
   * Validators : validadores sincronos : es decir validadores que se ejecuten en el tiempo que una perzona esta teclando una tecla .
   * ver nota video 249 : validadores sincrono y asincronoes diferencia - uso
   * inedx 0 : es valor predeterminado al input asociado - otra forma en ngOnit : gracias al ciclo de vida del mismo ,  Resetear valor . a los inputs
  */
  miFormulario: FormGroup = this.fb.group({
    nombre: [ , [ Validators.required, Validators.minLength(3) ]   ],  // [] : dentro de la coleccion son validadores sincronos , tercer index : validadores asincronos db etc ..
    precio: [/*valorPorDefault  */, [ Validators.required, Validators.min(0)] ],
    existencias: [ , [ Validators.required, Validators.min(0)] ], // index 0 asi vacio:  , segnifica null : valor por default
  })


 /* nos va ayudar trabajar con forms con bastantes props y mas complejos - injeccion de servicio
  *
 */
  constructor( private fb: FormBuilder ) { }



  /* ngOnit se ejecuta solo cuando :  Se renderiza el componente por primera vez
   * Refresh - resuelta nuevo rederizacion del componente tambien
   * mapear entre rutas y vovlver a dicha ruta : resuelta nuevo rederizacion del componente tambien
  */
  ngOnInit() {
   // console.log(this.miFormulario);
    // .setValue alternativa de reset : para establecer valor al form - su problema debemos esblecer todos los input del form sino se rompa la app
    this.miFormulario.reset({
      nombre: 'RTX 4080ti',
      precio: 16003
    })
  }


  /* Recibe nombre del input a validar : sirve para el mensaje de error - cuando no es valido
   * controls[campo] : controls es un objeto , estoy computando props : (nombre de inputs a lso que llevo control en form Reactive)
   * touched : paraque no me muestra mensaje de err desde el primer renderizacion debido a al os forms se inician vacios .
  */
  campoEsValido( campo: string ) {
    // ver objeto en consola para tener mas idea sobre el return de errors .
    //console.log(this.miFormulario);
    return this.miFormulario.controls[campo].errors
           && this.miFormulario.controls[campo].touched;
  }  // Ngif() => true or false , shoe the message



  guardar() {
     //console.log(this.miFormulario.invalid); // sera true si algun regla de validacion de los controllsForm falla
     /* en este caso si toco submit y no cumplo quiero mostrar mensaje de err - debo marcar todos en touched , para cumplir la condicion de mostarcion :
      * gracias a la Ref de mi Form Reactive me presta una funcion para hacer eso .: es decir como angular va campo por campo y lo toca es todo
     */
    if ( this.miFormulario.invalid )  {
      this.miFormulario.markAllAsTouched();
      return;
    }


    console.log(this.miFormulario.value);
    this.miFormulario.reset();

    // en esta altura debo comunicar un serviccio http : para mandar datos para almacenamiento o verificacion de saldo etcc .
  }

}
