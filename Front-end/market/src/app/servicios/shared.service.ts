import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  stringcart = "";
  allcart: any = {};

  public saveCart(cart:string): void{
    console.log(cart)
    this.allcart = JSON.parse(cart);
    console.log(this.allcart);
    
  }
  

  public getCart(): string | null{
    return this.allcart;
  }



}
