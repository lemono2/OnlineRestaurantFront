import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FoodCardComponent } from './food-card/food-card.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductsComponent } from './products/products.component';
import { BasketComponent } from './basket/basket.component';
import {provideHttpClient} from "@angular/common/http";
import { MainComponent } from './main/main.component';
import { BasketItemComponent } from './basket-item/basket-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FoodCardComponent,
    AboutUsComponent,
    ProductsComponent,
    BasketComponent,
    MainComponent,
    BasketItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,


  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
