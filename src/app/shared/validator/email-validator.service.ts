import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';

// map operador : me permite Transformar el valor que La Observable esta emitiendo y regresar cualquier valor quiero

/* muy parecido a los gars
 * todos esto para hacer validacion asyncrona contra bqack-end db
*/
@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator {

  constructor( private http: HttpClient ) { }


  validate( control: AbstractControl ): Observable<ValidationErrors | null> {

    const email = control.value;
    console.log(email);
    return this.http.get<any[]>(`http://localhost:3000/usuarios?q=${ email }`)
                .pipe(
                  //delay(3000), // es un operador nos hace esperar antes de ejecutar la siguiente instruccuines : en este caso lo hemos usado suponiendo que el servicioRest tardo 3s en responder : asi podemos ver el estado del form pending
                  map( resp => {
                    // TODO : a mi parecer debo usar una funcion de js , buscarla en curso , que encuentra la coincidencia de una prop dentro de un Objeto de una coleccion .

                    return ( resp.length === 0 ) // [] vacia == length = 0 = es decir el email no eciste en db , pues nul , es decir no hay choque
                        ? null
                        : { emailTomado: true } // objeto ... e concidera err
                  })
                );

  }
}
