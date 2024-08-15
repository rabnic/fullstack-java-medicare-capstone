import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ShopService } from '../../services/shop.service';
import { CartService } from '../../services/cart.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  public product: Product | null = null;
  public quantity: number = 1;
  public errorMessage: string | null = null;

  /* --------- Constructor --------- */
  constructor(activatedRoute: ActivatedRoute,
    shopService: ShopService,
    public cartService: CartService,
    private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if (params['id'])
        shopService.getProductById(params['id']).subscribe(
          {
            next: (data) => {
              this.product = data;
            }, error: (error) => {
              console.log(error);
            }
          }
        );
    })
    console.log(this.product);
  }

  public getCurrentQuantityInCart() {
    let count = 0;
    for (let id of this.cartService.getAllProductIds()) {
      if (id === this.product?.id) { count++; }
    }
    return count;
  }

}
