import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})
export class CartService {
  items=[];
  constructor(private http:HttpClient) { }

  //adding into the Cart
  addToCart(product){
    console.log("addToCart product from CartService!!")
    console.log("before product id "+this.items);
    this.items.push(product);
    console.log("after product id "+this.items);
  }

  //get Items from the Cart
  getItems(){
    return this.items;
  }

  //empty the cart
  clearCart(){
    this.items=[];
    return this.items;
  }

  getShippingPrices()
  {
   return this.http.get('/assets/shipping.json');
  }
}