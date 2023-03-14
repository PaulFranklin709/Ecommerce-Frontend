import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  http: HttpClient;
  products: Product[]

  constructor(http: HttpClient) {
    this.http = http;
    this.products = [];
  }

  getProducts() {
    let url = "http://localhost:8080/products";

    this.http.get(url).subscribe(
      (response: any) => {
        console.log(response);
      },
      (error) => {console.log(error)}
      );
  }
}
