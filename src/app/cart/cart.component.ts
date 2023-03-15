import { Component } from '@angular/core';
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
  products: Product[]

  constructor(activatedRoute: ActivatedRoute, productService: ProductService, cartService: CartService) {
    this.products = [];
    this.products = cartService.products;

    let productId = activatedRoute.snapshot.params["productId"];
    let product = productService.getProductById(productId);

    cartService.addToCart(product);
    this.products = cartService.products;
  }
}
