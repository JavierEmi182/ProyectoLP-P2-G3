import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get('http://localhost/backend/Api/productoapi.php')
  }
  //http://localhost/backend/Api/productoapi.php?id=001
  getProductbyID(id:String){
    return this.http.get(`http://localhost/backend/Api/productoapi.php?id=${id}`)
  }
}
