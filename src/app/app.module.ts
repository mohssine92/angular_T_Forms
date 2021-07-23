import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Router Principal
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'; // para hacer peticiones http


import { SharedModule } from './shared/shared.module';


// Componentes
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
