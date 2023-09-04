import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductoService } from 'src/app/servicios/producto.service';
import { Producto } from 'src/app/interfaz/producto';
import { MatCard } from '@angular/material/card';
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {

  productos : any[]=[]
constructor(private productSvc: ProductoService){
  this.productSvc.getAllProducts().subscribe(res=>{
    console.log(res)
    this.productos=res as any[]
  })
}
}
