import { Component, OnDestroy } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Order } from '../../models/order';
import { CartItem } from '../../models/cart-item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-confirmation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-confirmation.component.html',
  styleUrl: './order-confirmation.component.css'
})
export class OrderConfirmationComponent implements OnDestroy {
  public orderDetails: Order | null = null;
  public items: CartItem[];

  constructor(public cartService: CartService) {
    this.items = cartService.getItems();
    this.orderDetails = cartService.getOrderDetails();
  }


  ngOnDestroy(): void {
    this.cartService.clearCart()
  }



}
