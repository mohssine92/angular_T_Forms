import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validator/email-validator.service';


import { ValidatorService } from 'src/app/shared/validator/validator.service';
//import { emailPattern, nombreApellidoPattern, noPuedeSerStrider } from '../../../shared/validator/validaciones';

@Component({
  selector: 'app-login',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {


  /*  Definicion de mi Formulario : Referencia del formulario Reactivo a formulario html: diseño
   * recuerda dentro de  [ Validators.required ] se van las validaciones syncronas - asyncronas lo veremos despues como se hacen , van :
   * como tercer arg [] van las validaciones asyncronas que no dependen de las peticiones http . asi en tercer arg : siempre que regresen una promesa o Observable
   * pero en este caso queremos hacer peticion http va validar en correo contra db
  */
  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [ Validators.required , Validators.pattern( this.validatorService.nombreApellidoPattern ) ] ],
    email: ['', [ Validators.required,  Validators.pattern( this.validatorService.emailPattern ) ] , [ this.emailValidator ] ],
    username: ['', [ Validators.required, this.validatorService.noPuedeSerStrider ] , /* VAlidaciones_asuncronass */ ],
    password: ['', [ Validators.required, Validators.minLength(6) ]  ],
    password2: ['', [ Validators.required ]  ],

  }, { // aqui en este objeto  van validacion denivel global en el formulario :
    validators: [ this.validatorService.camposIguales('password','password2') ]

  });



  /* prop de la class getter
   */
  get emailErrorMsg(): string {

    const errors = this.miFormulario.get('email')?.errors;
    if ( errors?.required ) {
      return 'Email es obligatorio';
    } else if ( errors?.pattern ) {
      return 'El valor ingresado no tiene formato de correo';
    } else if ( errors?.emailTomado ) {
      return 'El email ya fue tomado';
    }

    return '';
  }




  /* 1 arg . Injectar form builder service para tema de las validaciones : en el Referencia al formulario Rectivo
   * la segunda Injeccion es un servicio para validaciones cutumizada
   * tercer Injeccion es para validacion asyncrona que depende de otra injeccion http : para hacer validacion de email contra una db usando un backend json
  */
  constructor( private fb: FormBuilder,
               private validatorService : ValidatorService,
               private emailValidator: EmailValidatorService

  ) { }



  ngOnInit(): void {

     // el profe no quiere cada vez chocamos con validacion de err en edsarollo ; asi asignamos valores a validacion anterior y enfocamos en el que tenemos .
    this.miFormulario.reset({
      nombre: 'Fernando Herrera',
      email: 'test1@test.com',
      username: 'fernando_her85',
      password: '123456',
      password2: '123456'
    })

  }


  /* esta funcion nos hace mostrar mensaje cuando un campo no ha cumplido : asi logramos mostracion de mensaje de err de forma condicional
   + get() nos hace captar el objeto campo de la refrecia FormReactive
   * esta dinamica va recibiendo los campos del form
  */
  campoNoValido( campo: string ) {
    return this.miFormulario.get(campo)?.invalid
           && this.miFormulario.get(campo)?.touched;
  } // returna true en caso de cumplirse : es lo que mecesita para mostrar mensaje en html


  /* no olvidar jamas marcar campos toched : esto haria cumplir && de la campoValidid : validacion : y dispara err
   +
  */
  submitFormulario(){
    console.log(this.miFormulario.value);

    this.miFormulario.markAllAsTouched();

  }
}
