import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  private apiUrl = 'http://localhost/backend/Api/productoapi.php'; 

  constructor(private http: HttpClient) {}

  // Add a product to the cart
  addToCart(product: any): Observable<any> {

    return this.http.post<any>(`${this.apiUrl}/add-to-cart`, product);
  }

  // Remove a product from the cart
  removeFromCart(productId: string): Observable<any> {

    return this.http.delete<any>(`${this.apiUrl}/remove-from-cart/${productId}`);
  }

  // Calculate the total price of the cart
  calculateTotalPrice(cartItems: any[]): number {

    let totalPrice = 0;
    for (const item of cartItems) {
      totalPrice += item.precio;
    }
    return totalPrice;
  }
}
