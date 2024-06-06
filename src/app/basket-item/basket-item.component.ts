import {Component, Input} from '@angular/core';
import {BasketProduct} from "../interfaces/basket-product";
import {BasketsService} from "../services/baskets.service";

@Component({
  selector: 'app-basket-item',
  templateUrl: './basket-item.component.html',
  styleUrl: './basket-item.component.css'
})
export class BasketItemComponent {
  @Input() item:BasketProduct|undefined = undefined

  constructor(private basketService:BasketsService) {

  }

  deleteItem(){
    if (this.item?.product.id){
    this.basketService.deleteProduct(this.item?.product?.id).subscribe(
      {
        next:()=>{
          window.location.reload()
        }
      }
    )}

  }
}
