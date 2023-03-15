import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { Product } from '../model/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartService: CartService;
  products: Product[];
  totalPrice: Number;

  constructor(activatedRoute: ActivatedRoute, productService: ProductService, cartService: CartService) {
    this.cartService = cartService;
    this.products = [];
    this.products = cartService.products;

    let productId = activatedRoute.snapshot.params["productId"];
    let product = productService.getProductById(productId);

    cartService.addToCart(product);
    this.products = cartService.products;

    this.totalPrice = cartService.totalPrice();    
  }

  onSubmit(form: NgForm) {
    // data bind
    // this.products
    // calculate total
    
  }
}
