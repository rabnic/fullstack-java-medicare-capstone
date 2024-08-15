import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  private baseUrl = "http://localhost:8081/shop";

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}`);
  }

  public getProductById(productId: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/product/${productId}`);
  }

}
