import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Order } from '../models/order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: CartItem[] = [];
  public orderDetails: Order | null = null;
  // public confirmedOrder: any;
  private baseUrl = "http://localhost:8081/shop";

  constructor(private http: HttpClient) { }

  public addToCart(product: any, quantity: number = 1) {
    console.log('product', product);
    const existingItem = this.items.find(item => item.id === product.id);
    console.log('existingItem', existingItem);
    if (existingItem) {
      existingItem.quantity++;
      existingItem.subtotal = existingItem.quantity * existingItem.price;
      console.log('items', this.items);
    } else {
      const newItem: CartItem = {
        ...product,
        quantity: quantity,
        subtotal: product.price * quantity
      };
      console.log('newItem', newItem);
      this.items.push(newItem);
    }
  }
  //
  public removeFromCart(productId: any, all: boolean = false) {
    const itemIndex = this.items.findIndex(item => item.id === productId);

    if (itemIndex > -1) {
      if (all || this.items[itemIndex].quantity === 1) {
        this.items.splice(itemIndex, 1);
      } else {
        this.items[itemIndex].quantity -= 1;
        this.items[itemIndex].subtotal = this.items[itemIndex].quantity * this.items[itemIndex].price;
      }
    }
  }

  public getItems(): CartItem[] {
    return this.items;
  }

  public getCartQuantity(): number {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  public clearCart() {
    this.items = [];
    this.orderDetails = null;
  }

  public getTotal(): number {
    return this.items.reduce((total, item) => total + item.subtotal, 0);
  }

  public getAllProductIds(): number[] {
    const productIds: number[] = [];
    this.items.forEach(item => {
      for (let i = 0; i < item.quantity; i++) {
        productIds.push(item.id);
      }
    });
    return productIds;
  }

  public saveOrderDetails(confirmmedOrder: Order) {
    this.orderDetails = confirmmedOrder;
  }

  public getOrderDetails() {
    return this.orderDetails;
  }

  public createOrder(orderData: Partial<Order>): Observable<Order> {
    const order: Order = {
      id: 0,
      fullName: orderData.fullName!,
      address: orderData.address!,
      email: orderData.email!,
      phone: orderData.phone!,
      date: new Date().toISOString(),
      quantity: this.getAllProductIds().length,
      totalAmount: this.getTotal(),
      productIDs: this.getAllProductIds()
    };

    return this.http.post<Order>(`${this.baseUrl}/order`, order);

  }
}
