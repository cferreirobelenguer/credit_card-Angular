import {Component} from '@angular/core';

@Component({
    selector:'formulario',
    templateUrl:'../formulario/formulario.component.html'
})
export class Formulario{
    
    constructor(){
        
        console.log("Mi componente cargado")
    }
}