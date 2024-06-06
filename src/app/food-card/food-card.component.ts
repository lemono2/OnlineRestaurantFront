import {Component, Input, input} from '@angular/core';
import {Product} from "../interfaces/product";
import {BasketsService} from "../services/baskets.service";

@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrl: './food-card.component.css'
})
export class FoodCardComponent {
  @Input() food:Product | null = null;

  constructor(private basketService:BasketsService) {

  }

  addToCart(){
    this.basketService.addToBasket({price:this.food?.price, quantity:1,productId:this.food?.id}).subscribe({
      next:(res)=>{
        alert("Item was added to the basket ")
      }
    })
  }
}
