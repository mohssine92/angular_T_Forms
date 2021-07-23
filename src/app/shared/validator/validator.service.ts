import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';




@Injectable({
  providedIn: 'root'
})
export class ValidatorService {


  public nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";


  /* la ventaja esque aqui en el constructor puedo Injectar otros servicio o una Injeccion de dependencias para poder hacer otro tipos de validaciones mas robustas
   *
  */
  // TODO : Usualmente se  trabaja de esta manera : si trabajamos en otro proyecto : copiamos este servicio y lo pegamos en el proyecto y lo usamos y se acabado el asunto .
  constructor() { }


  noPuedeSerStrider ( control:FormControl ) : ValidationErrors | null {

    const valor:string = control.value?.trim().toLowerCase();   // trim() elemina cualquier espacio al principio y al final  porque es string el value
    console.log(valor)

   if( valor === 'strider' ){
      return {
        noStrider: true
      }// cuando Regresamos un Objeto se considera un err de tipo ValidationErrors
   }else{
      return null;
   }
  } // una validacion regresa nul : Segnifica no hay ningun err



  /* NB : recueda en validatores no podemos ejecutar funciones de validacion custumizadas : solo se manda la Referencia de la misma, pero necesitamos recibir  args , Como hacemos ??
   *    : facil ejecutamos la funcion pasando args en su tiempo en vez de definirla Pero : la solucion es la funcion ejecutada debe regresar una funcion .esto es todo
  */
  camposIguales( campo1: string, campo2: string ) {

    return ( formGroup: AbstractControl ): ValidationErrors | null => {
      // console.log(formGroup);// es el control del formulario entero

      const pass1 = formGroup.get(campo1)?.value;
      const pass2 = formGroup.get(campo2)?.value;
      console.log(pass1, pass2)
      if ( pass1 !== pass2 ) {
        formGroup.get(campo2)?.setErrors({ noIguales: true }); // recuerda formGroup es el objeto de mi formulario por pasado por refrencia : asi de esta forma al campo password2 : le estoy estableciendo err , es decir que la validacion esta fallando
        return { noIguales: true }
      }

      formGroup.get(campo2)?.setErrors(null); // correcto son iguales */ /* purga cialquier err tiene el campo con esta instruccion  */

      return null
    }

  }






}
