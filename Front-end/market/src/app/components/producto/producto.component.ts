import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductoService } from 'src/app/servicios/producto.service';
import { Producto } from 'src/app/interfaz/producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})

export class ProductoComponent {
  product: Producto ={
      id: '',
      nombre: '',
      precio: 0,
      stock: 0,
      imageURL: '',
      categoria: '',
      descripcion: ''
    };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productoSvc: ProductoService
  ) {
    const id = this.route.snapshot.params;
    this.productoSvc.getProductbyID(Object.values(id)[0]).subscribe(
      (res: any) => {
        this.product = res;
        console.log(this.product); // This will display the retrieved product object
      },
      error => {
        console.error('Error fetching product:', error);
      }
    );
  }
}
