import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductoService } from 'src/app/servicios/producto.service';
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})

export class ProductoComponent {
  product :any[]=[]
  constructor(private route: ActivatedRoute,private router: Router,private productoSvc:ProductoService){
    const id = this.route.snapshot.params;
    console.log(Object.values(id)[0])
    this.productoSvc.getProductbyID(Object.values(id)[0]).subscribe(res=>{
      this.product=res as any[]
      console.log(res)
    })
    
  }
}
