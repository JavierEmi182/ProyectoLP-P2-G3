import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarritoService } from 'src/app/servicios/carrito.service';

@Component({
  selector: 'app-loadcart',
  templateUrl: './loadcart.component.html',
  styleUrls: ['./loadcart.component.css']
})
export class LoadcartComponent {


  constructor(private router:Router, private carSvc:CarritoService){

    this.cedula.valueChanges.subscribe(value =>{
      this.cedula.setValue(value,{emitEvent:false})
      this.cedclient = this.cedula.value;
    })
  
  }

  cedula = new FormControl('',[Validators.required, Validators.minLength(10), Validators.maxLength(11)]);
  cedclient: any = this.cedula.value;

  getErrorCed(){
    let msg = ''
    if (this.cedula.hasError('required')){
      
      msg = 'Debe ingresar una cedula';
    }

    if(this.cedula.hasError('maxlength') || this.cedula.hasError('minlength')){
      msg = 'Formato Invalido de cedula';
    }

    return msg;
  }

  onSubmit(cedula:any){

    if(this.cedula.invalid){
      alert("Cedula invalida!")
    }

    else{
      this.router.navigate([`/carrito/${cedula}`])
    }

  }



}
