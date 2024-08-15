import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl = "http://localhost:8081/admin/products";

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/all`);
  }

  public getProduct(productId: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/find/${productId}`);
  }

  public addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.baseUrl}/add`, product);
  }

  public updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.baseUrl}/update`, product);
  }

  public deleteProduct(productId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${productId}`);
  }

  public getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.baseUrl}/categories/all`);
  }
}
