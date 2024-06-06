import {Component, Input, input} from '@angular/core';
import {Product} from "../interfaces/product";

@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrl: './food-card.component.css'
})
export class FoodCardComponent {
  @Input() food:Product | null = null;
}
