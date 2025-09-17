import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Product {
  url="http://localhost:3000/";
  
  constructor(private http: HttpClient){}

  productRetreieve(){
    return this.http.get<any>(this.url+"read");
  }

  productAdd(product:any){
    return this.http.post<any>(this.url+"add", {product});
  }

  productUpdate(product: any){
    return this.http.post<any>(this.url+"update", {product});
  }

  productRemove(productID: any){
    return this.http.post<any>(this.url+"remove", {productID});
  }
}
