import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BasketsService {
  private apiUrl: string = 'https://restaurant.stepprojects.ge/api';

  constructor(private http: HttpClient) {}

  addToBasket(data:any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Baskets/AddToBasket`,data)
      .pipe(map(response => {
          return response;
        }),
        catchError(error => {
          return throwError(error);
        })
      );
  }

  getAllBaskets(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Baskets/GetAll`,)
      .pipe(map(response => {
          return response;
        }),
        catchError(error => {
          return throwError(error);
        })
      );
  }

  updateBaskets(): Observable<any> {
    return this.http.put(`${this.apiUrl}/Baskets/UpdateBasket`,{})
      .pipe(map(response => {
          return response;
        }),
        catchError(error => {
          return throwError(error);
        })
      );
  }

  deleteProduct(productId:number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/Baskets/DeleteProduct/${productId}`)
      .pipe(map(response => {
          return response;
        }),
        catchError(error => {
          return throwError(error);
        })
      );
  }

}
