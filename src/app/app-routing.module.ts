import { NgModule } from '@angular/core';                                               // router principal instalado por defecto
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [

  { // carga de moduls atraves de lazyLoad _ resuelta rutas activas
    path: 'template',
    loadChildren: () => import('./template/template.module').then( m => m.TemplateModule )
  },
  {
    path: 'reactive',
    loadChildren: () => import('./reactive/reactive.module').then( m => m.ReactiveModule )
  },
  {
    path: '**',
    redirectTo: 'template' // decidir que trayectoria toma para la carga de ruta por default
  }

];




/*
* no estoy implementando ni rutas ni nada , porque este mudulo solo va tener los componentes de uso golbal en toda la applicacion
*/
@NgModule({
  imports: [
    RouterModule.forRoot(routes),

  ],
  exports: [
    RouterModule // asi ya se encuentra expotado en el modulo principal , asi cualquier modulo sera cargarado por lazyload su fichero de router no tiene porque exportar RouterModule
  ]
})
export class AppRoutingModule { }


