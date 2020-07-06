import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor(private http: HttpClient) { }

  productUrl = 'https://us-central1-kisan-rest-api.cloudfunctions.net/app/api/products';

  getProducts(): Observable<any> {
    return this.http.get(this.productUrl);
  }
}
