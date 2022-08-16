import {Component} from '@angular/core';
import swal from'sweetalert2';

@Component({
    selector:'formulario',
    templateUrl:'../formulario/formulario.component.html'
})
export class Formulario{
    public user:any;
    public datos:any;
    public validacion:boolean;
    public volver:boolean;
    
    
    constructor(){
        
        this.user={
            name:'',
            number:'',
            fecha1:'',
            fecha2:'',
            cvc:''

        }
        this.datos={
            name:'',
            number:'',
            fecha:'',
            cvc:''
        }
        this.validacion=false
        this.volver=false

    }
    volverMenu(){
        this.validacion=false
        console.log("Este es el evento de volver")
        //reset inputs
        this.user.name=""
        this.user.number=""
        this.user.fecha1=""
        this.user.fecha2=""
        this.user.cvc=""
    };
    onSubmit(){
        
        let noValidado=false
        //We validate if name card is only letters
        let numbers="0123456789"
        for(let i of this.user.name){
            if(numbers.indexOf(i)!=-1){
                console.log(i)
                noValidado=true
                break;
            }else{
                this.datos.name=this.user.name
            }
        }
        //We validate if number card is only number
        if(!isNaN(this.user.number)){
            this.datos.number=this.user.number
        }else{
            noValidado=true
        }
        //We validate is number card length is 16 digits
        if(this.user.number.length==16){
            this.datos.number=this.user.number
        }else{
            noValidado=true
        }
        //We validate is dates length are 2 digits
        if(this.user.fecha1.length==2 && this.user.fecha2.length==2){
            let mes;
            let year;
            let inicio=this.user.fecha1.substring(0, 1);
            let inicioYear=this.user.fecha2.substring(0,1);

            if(inicio==="0"){
                mes=parseInt((this.user.fecha1.substring(1,2)))
                
                console.log(mes)
            }else{
                mes=parseInt(this.user.fecha1)
                console.log(mes)
            }
            if(inicioYear==="0"){
                year=parseInt((this.user.fecha2.substring(1,2)))
                
                console.log(year)
            }else{
                year=parseInt(this.user.fecha2)
                console.log(year)
            }

            if(((mes>=1)&&(mes<=12))&&((year>=22))){
                console.log("validado")
                    this.datos.fecha=this.user.fecha1+"/"+this.user.fecha2
            }else{
                noValidado=true
            }
            
        }else{
            noValidado=true
        }
        //We validate if dates are only numbers
        if((!isNaN(this.user.fecha1))&&(!isNaN(this.user.fecha2))){
            this.datos.fecha=this.user.fecha1+"/"+this.user.fecha2
        }else{
            noValidado=true
        }
        //We validate if cvc length is 3 digits
        if(this.user.cvc.length==3){
            this.datos.cvc=this.user.cvc
        }else{
            noValidado=true
        }
        //We validate if cvc is only number
        if(!isNaN(this.user.cvc)){
            this.datos.cvc=this.user.cvc
        }else{
            noValidado=true
        }

        //Results of validations
        if(noValidado===true){
        
        swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">Your data is wrong</a>'
        })
            
        }else{
            
            //Se conecta con la API Rest y se guardan los datos del formulario mediante post
            fetch('http://localhost:3500/api/save',{
                method: "POST",
                headers: {
                    'content-type': 'application/json;charset=UTF-8',
                },
                body:JSON.stringify({
                    name:this.datos.name,
                    number:this.datos.number,
                    date:this.datos.fecha,
                    cvc:this.datos.cvc
                })
                
        })
            .then((res)=>res.json())
            .then((data)=>{
                console.log("Datos guardados: "+data)
            })
            .catch((error)=>{
                console.log("Error en la petición "+error) 
            })

            swal.fire({
                icon: 'success',
                text: 'We send your data',
                
            })
            this.validacion=true
        }
        
    }
}