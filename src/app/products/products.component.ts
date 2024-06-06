import { Component } from '@angular/core';
import {ProductService} from "../services/product.service";
import {Product} from "../interfaces/product";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products:Product[] = []
  constructor(private productService: ProductService) {
    productService.getAllProducts().subscribe({
      next:(products)=> {
        this.products=products
      }
    })
  }

}
