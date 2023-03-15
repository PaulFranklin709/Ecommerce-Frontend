import { Injectable } from '@angular/core';
import { Product } from './model/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: Product[]

  constructor() {
    const products = window.sessionStorage.getItem("products");
    if (products !== null) {
      this.products = JSON.parse(products);
    }
    else {
      this.products = [];
    }
  }

  addToCart(product: Product) {
    this.products.push(product);
    window.sessionStorage.setItem("products", JSON.stringify(this.products));
  }
}
