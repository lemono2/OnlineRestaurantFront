import {Component, input} from '@angular/core';

@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrl: './food-card.component.css'
})
export class FoodCardComponent {
  food:{
  name:string,
  price: number,
  containsNut:boolean,
  vegetarian:false,
  spiciness:number
  image:string
}    ={
  name:"no Name",
  price: 5,
  containsNut: false,
  vegetarian: false,
  spiciness:5,
  image:"url"
}
}
