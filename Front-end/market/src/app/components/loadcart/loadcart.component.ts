import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Carrito } from 'src/app/interfaz/carrito';
import { CarritoService } from 'src/app/servicios/carrito.service';
import { SharedService } from 'src/app/servicios/shared.service';

@Component({
  selector: 'app-loadcart',
  templateUrl: './loadcart.component.html',
  styleUrls: ['./loadcart.component.css']
})
export class LoadcartComponent {

  carrito!: any;
  carritosClientes: Carrito[] = [];

  ngOnInit(){
    this.carSvc.getAllCarritos().subscribe(respuesta =>{
      this.carritosClientes = respuesta as Carrito[];
    })
  }



  constructor(private router:Router, private carSvc:CarritoService, private shaSvc:SharedService){

    this.cedula.valueChanges.subscribe(value =>{
      this.cedula.setValue(value,{emitEvent:false})
      this.cedclient = this.cedula.value;
    })

    this.carrito = this.shaSvc.getCart();
    console.log(this.carrito)
  
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
      let act = true;
      for(const carro of this.carritosClientes){
        if(carro["cedula"] == cedula){

          if(Object.keys(this.carrito).length == 0){
            this.carrito = carro["productos"];
          }
          //update carrito
          act = false;
          this.carSvc.updateCarritoID(cedula,JSON.stringify(this.carrito)).subscribe(respuesta =>{
            alert("Se ha actualizado el carrito!")
            this.router.navigate([`/carrito/${cedula}`])
          })
     
        }
      }
      if(act){
        //create new carrito
          this.carSvc.createCarrito(cedula,JSON.stringify(this.carrito)).subscribe(respuesta =>{
            alert("Se ha creado el carrito!")
            this.router.navigate([`/carrito/${cedula}`])
          })
      }
    }

  }



}
