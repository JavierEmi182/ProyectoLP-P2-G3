import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor(private http: HttpClient) { }

  getAllCarritos() {
    return this.http.get('http://localhost/backend/Api/carritoapi.php')
  }
  //http://localhost/backend/Api/productoapi.php?id=001
  getCarritobyID(id:string){
    return this.http.get(`http://localhost/backend/Api/carritoapi.php?id=${id}`)
  }
  updateCarritoID(id:string,prods:string){
    return this.http.put(`http://localhost/backend/Api/carritoapi.php?id=${id}`,{"cedula":id,"productos":JSON.parse(prods)})
  }

  createCarrito(id:string,prods:string){
    return this.http.post(`http://localhost/backend/Api/carritoapi.php?id=${id}`,{"cedula":id,"productos":JSON.parse(prods)})
  }

}
