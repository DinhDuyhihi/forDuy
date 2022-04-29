import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http'
import { catchError, Observable, retry, throwError, tap } from 'rxjs';
import { Product } from '../interface/Product';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url = '../assets/products.json'
  constructor(private _http: HttpClient) { }
  // getProducts(): Observable<Product[]> {
  //   return this._http.get<Product[]>(this.url)
  //     .pipe(
  //       retry(2), catchError(this.handleError)
  //     )
  // }
  getProducts(): Observable<Product[]> {

    return this._http.get<Product[]>(this.url).pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
    )
}
  
  handleError(err: HttpErrorResponse) {
    return throwError(() => new Error(err.message)
    )
  }
}


