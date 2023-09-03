import { Producto } from 'src/app/interfaz/producto'; 

export interface Carrito {
    listaProductos: Producto[]; 
    cantidadArticulos: number;
    precioTotal: number;
  }