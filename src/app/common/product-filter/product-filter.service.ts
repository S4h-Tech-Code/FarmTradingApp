import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductFilterService {

  constructor(private http: HttpClient) { }

  productUrl = 'http://localhost:3000/products';


  getProducts(): Observable<any> {
    return this.http.get(this.productUrl);
  }

  getProductsByIdParams(slectedProductId: string): Observable<any> {
    let param1 = new HttpParams().set('id', slectedProductId)
    return this.http.get(this.productUrl, { params: param1 });
  }
}
