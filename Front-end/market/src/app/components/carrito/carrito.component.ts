import { Component } from '@angular/core';
import { ProductoService } from 'src/app/servicios/producto.service';

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
