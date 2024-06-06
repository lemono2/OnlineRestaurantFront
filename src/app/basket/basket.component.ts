import {Component, input} from '@angular/core';
import {BasketProduct} from "../interfaces/basket-product";
import {ProductService} from "../services/product.service";
import {BasketsService} from "../services/baskets.service";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.css'
})
export class BasketComponent {

  basketProducts:BasketProduct[]=[];
  totalCost:number = 0;
  totalQuantity:number = 0;


  constructor(private basketService: BasketsService) {
    basketService.getAllBaskets().subscribe({
      next:(items:BasketProduct[])=> {
        this.basketProducts=items;
        items.map((i ) =>{
          this.totalCost += i.price;
          this.totalQuantity += i.quantity;


        })
      }
    })
  }




}
