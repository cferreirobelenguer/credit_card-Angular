import {Component} from '@angular/core';

@Component({
    selector:'formulario',
    templateUrl:'../formulario/formulario.component.html'
})
export class Formulario{
    public user:any
    constructor(){
        
        this.user={
            name:'',
            number:'',
            fecha1:'',
            fecha2:'',
            cvc:''

        }
    }
    onSubmit(){
        console.log(this.user)
        alert("Formulario enviado")
    }
}