import { Component } from '@angular/core';
import { ProductoService } from 'src/app/servicios/producto.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  productos : any[]=[]
constructor(private productSvc: ProductoService){
  this.productSvc.getAllProducts().subscribe(res=>{
    console.log(res)
    this.productos=res as any[]
  })
}
}
