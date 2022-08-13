import {Component} from '@angular/core';

@Component({
    selector:'formulario',
    templateUrl:'../formulario/formulario.component.html'
})
export class Formulario{
    public user:any;
    public validacion:boolean
    
    constructor(){
        
        this.user={
            name:'',
            number:'',
            fecha1:'',
            fecha2:'',
            cvc:''

        }
        this.validacion=false
    }
    onSubmit(){
        let name=""
        let number=""
        let fecha=""
        let cvc=""
        let noValidadoName=false
        let noValidadoNumber=false
        let noValidadoNumberLen=false
        let noValidadoFechaNumber=false
        let noValidadoCvc=false
        let noValidadoCvcNumber=false
        let noValidadoFecha=false
        //We validate if name card is only letters
        let numbers="0123456789"
        for(let i of this.user.name){
            if(numbers.indexOf(i)!=-1){
                console.log(i)
                noValidadoName=true
                break;
            }else{
                name=this.user.name
            }
        }
        //We validate if number card is only number
        if(!isNaN(this.user.number)){
            number=this.user.number
        }else{
            noValidadoNumber=true
        }
        //We validate is number card length is 16 digits
        if(this.user.number.length==16){
            number=this.user.number
        }else{
            noValidadoNumberLen=true
        }
        //We validate is dates length are 2 digits
        if(this.user.fecha1.length==2 && this.user.fecha2.length==2){
            fecha=this.user.fecha1+"/"+this.user.fecha2
        }else{
            noValidadoFecha=true
        }
        //We validate if dates are only numbers
        if((!isNaN(this.user.fecha1))&&(!isNaN(this.user.fecha2))){
            fecha=this.user.fecha1+"/"+this.user.fecha2
        }else{
            noValidadoFechaNumber=true
        }
        //We validate if cvc length is 3 digits
        if(this.user.cvc.length==3){
            cvc=this.user.cvc
        }else{
            noValidadoCvc=true
        }
        //We validate if cvc is only number
        if(!isNaN(this.user.cvc)){
            cvc=this.user.cvc
        }else{
            noValidadoCvcNumber=true
        }

        //Results of validations
        if(noValidadoNumberLen===true){
            alert("Invalid format, number card is 16 digits")
        }else if(noValidadoName===true){
            alert("Invalid format, name is letters only")
        }else if(noValidadoNumber===true){
            alert("Invalid format, number card is only number format")
        }else if(noValidadoFechaNumber===true){
            alert("Invalid format, date is only number format")
        }else if(noValidadoFecha===true){
            alert("Invalid format, date is only 2 characters")
        }else if(noValidadoCvc===true){
            alert("Invalid format, date is only 3 characters")
        }else if(noValidadoCvcNumber===true){
            alert("Invalid format, cvc is only number format")
        }else{
            alert("We send your data")
            this.validacion=true
        }
        
    }
}