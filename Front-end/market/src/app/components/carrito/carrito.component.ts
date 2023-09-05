import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductoService } from 'src/app/servicios/producto.service';
import { Producto } from 'src/app/interfaz/producto';
import { MatCard } from '@angular/material/card';

import { CarritoService } from 'src/app/servicios/carrito.service';
import { Carrito } from 'src/app/interfaz/carrito';
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  p!:Producto
  productos : Producto[]=[]
  carritoClient!: Carrito;
  c !: Number
  constructor(private route: ActivatedRoute, private productSvc: ProductoService, private carSvc: CarritoService){
    
  }

  ngOnInit(){
    const id = this.route.snapshot.params["id"];
    /*
    this.productSvc.getAllProducts().subscribe(res=>{
      console.log(res)
      this.productos=res as any[]
    })*/

    this.carSvc.getCarritobyID(id).subscribe(res =>{
      this.carritoClient = res as Carrito;
      console.log(this.carritoClient)
      let prods=Object.values(this.carritoClient)[1]
      let ids=Object.keys(prods)
      let cantidad=Object.values(prods)

      for(let i=0;i<ids.length;i++){
        this.productSvc.getProductbyID(ids[i]).subscribe(r=>{
        this.c= Number(cantidad[i])
        this.p= r as Producto
          this.p.stock= this.c
          this.productos.push(this.p)
        })
      }
      console.log(this.productos)

    })

  }


}
