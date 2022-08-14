import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {Formulario} from './components/formulario/formulario.component';
import { PiePaginaComponent } from './components/pie-pagina/pie-pagina.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';




@NgModule({
  declarations: [
    AppComponent,
    Formulario,
    PiePaginaComponent,
    CabeceraComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
