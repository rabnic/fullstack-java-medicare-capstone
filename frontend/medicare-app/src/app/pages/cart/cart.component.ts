import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { Order } from '../../models/order';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, RouterLinkActive],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  fullName: string = '';
  address: string = '';
  email: string = '';
  phone: string = '';
  loading: boolean = false;

  constructor(public cartService: CartService, private router: Router) {

  }

  orderForm = new FormGroup({
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    cardNumber: new FormControl('', Validators.required),
    expiration: new FormControl('', Validators.required),
    cvv: new FormControl('', Validators.required),
  });

  handleSubmit() {
    this.loading = true;
    const orderData: Partial<Order> = {
      fullName: this.orderForm.value.fullName,
      address: this.orderForm.value.address,
      email: this.orderForm.value.email,
      phone: this.orderForm.value.phone
    };

    // console.log(this.cartService.createOrder(orderData));
    this.cartService.createOrder(orderData).subscribe(
      (order) => {
        console.log('Order created successfully', order);
        this.cartService.saveOrderDetails(order);
        this.loading = false;
        this.router.navigate(['/order-confirmation']);
      },
      (error) => {
        console.error('Failed to create order', error);
        this.loading = false;
      }
    );
  }

}
