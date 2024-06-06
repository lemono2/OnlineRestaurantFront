import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl: string = 'https://restaurant.stepprojects.ge/api';


  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Products/GetAll`)
      .pipe(map(response => {
          return response;
        }),
        catchError(error => {
          return throwError(error);
        })
      );
  }
}
