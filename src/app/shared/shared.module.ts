import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


// Componnets
import { SidemenuComponent } from './sidemenu/sidemenu.component';



@NgModule({
  declarations: [
    SidemenuComponent,

  ],
  imports: [
    CommonModule, // directivas ngif , ngFor pipes y otras cosas ... lo que exporte este module
    RouterModule // importacion obligatoria para la funcionalidad de los atrributes del router en template html como : routerlink etc ..
  ],
   exports: [
    SidemenuComponent
  ]
})
export class SharedModule { }


// en este modulo puedo crear varios componentes , no componentes image , componentes que yo puede reutulizar ,
/*
* como sidebar
* formularios bien deseñado
* banner
* cards bien guay etcccc....
*/
