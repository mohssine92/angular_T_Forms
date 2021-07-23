import { FormControl } from '@angular/forms';


export const nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';


/* Validacion mas estricta de un correo : el profe no le ha gustado la validacion para correo que nos ofrece validatores */
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";


 /* Validacion custumizada
   * si se implementa en la class sera un metodo y para usarla en fichero independiente se convierte en funcion de flecha y exportar a nivel de la app
   * !!! unico Inconveniente es cuando occupamos data que se encuentra en otro servicio es complicada desdequi : asi las validaciones es preferible trabajalos en un servicio.
  */
export const noPuedeSerStrider = ( control:FormControl ) =>  {

  const valor:string = control.value?.trim().toLowerCase();   // trim() elemina cualquier espacio al principio y al final  porque es string el value
  console.log(valor)

 if( valor === 'strider' ){
    return {
      noStrider: true
    }// cuando Regresamos un Objeto se considera un err
 }else{
    return null;
 }


} // una validacion regresa nul : Segnifica no hay ningun err
