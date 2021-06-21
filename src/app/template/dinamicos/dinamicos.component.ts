import { Component } from '@angular/core';



interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}


@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  /* estblecido atraves de () emission de ngModel
   */
  nuevoJuego: string = '';

  /*
   * objeto inicializador de nuestro formulario - estado inicial del form
  */
  persona: Persona = {
    nombre: 'Fernando', // '' para iniciaR como string vacio .
    favoritos: [ // lectura  em template usar ngFor
      { id: 1, nombre: 'Metal Gear' },
      { id: 2, nombre: 'Death Stranding' },
    ]
  }

  agregarJuego() {
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1, // puede ser que el id se repite - no es forma correcta para borra objetos - en general los ids viene de db
      nombre: this.nuevoJuego
    }

     if( nuevoFavorito.nombre == "" ) { return }; // validacion para no ensuciar coleccion con valores vacios

    this.persona.favoritos.push({ ...nuevoFavorito }); // desestructurando objeto dentro de objeto nuevo - asegurarme que no estoy mandando refrencia al objeto inicial
    this.nuevoJuego = ''; // limpiar
  }

  eliminar( index: number ) {
    this.persona.favoritos.splice(index, 1);
  }

  guardar() {
    console.log('formulario posteado');
  }

}

