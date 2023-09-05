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
   total :Number=0 
  constructor(private router:Router, private route: ActivatedRoute, private productSvc: ProductoService, private carSvc: CarritoService){
    
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
          let t= ( Number(this.p.precio) * Number(this.c))
          
          this.total=Number((Math.round(Number(this.total) + Number(t) * 100) / 100).toFixed(2))
          
          this.productos.push(this.p)
          
        })
      }
      console.log(this.total)
      console.log(this.productos)

    })

  }
  borrarProducto(id:string){
    const cedula = this.route.snapshot.params["id"];
    let prods=Object.values(this.carritoClient)[1]
    delete prods[id];
    console.log(prods);
    this.carSvc.updateCarritoID(cedula,JSON.stringify(prods)).subscribe(respuesta =>{
      alert(`Se ha borrado el producto con id ${id}`)
      window.location.reload ();
    })



  }
  comprar(){
    const cedula = this.route.snapshot.params["id"];
    let prods=Object.values(this.carritoClient)[1]
    console.log(prods)
    let ids=Object.keys(prods) //[001,002]
    for (let x=0;x<ids.length;x++){
      delete prods[ids[x]]
    }
    this.carSvc.updateCarritoID(cedula,JSON.stringify(prods)).subscribe(respuesta =>{
      alert("Se ha realizado una compra!")
            this.router.navigate([`/`])
      
    })

    
  }


}
