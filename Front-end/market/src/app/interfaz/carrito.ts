import { Producto } from 'src/app/interfaz/producto'; 

export interface Carrito {
    cedula: string,
    productos: Array<String>
  }