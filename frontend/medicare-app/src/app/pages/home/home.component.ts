import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../services/shop.service';
import { AdminService } from '../../services/admin.service';
import { Product } from '../../models/product';
import { Category } from '../../models/category';
import { HttpErrorResponse } from '@angular/common/http';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgForm, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  public products: Product[] | null = null;
  public categories: Category[] = [];

  constructor(private shopService: ShopService, private adminService: AdminService) { }

  ngOnInit(): void {
    this.getProducts();

    this.adminService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }


  public getProducts(): void {
    this.shopService.getProducts().subscribe(
      (response: Product[]) => {
        this.products = response;
        console.log(this.products);
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )
  }

  public searchProducts(key: string): void {
    console.log(key);
    const results: Product[] = [];
    for (const product of this.products || []) {
      if (product.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || product.brand.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || product.description.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(product);
      }
    }
    this.products = results;
    if (results.length === 0 || !key) {
      this.getProducts();
    }
  }



  filterByCategory(key: string) {
    console.log("key==", typeof key);
    let id = parseInt(key);
    const results: Product[] = [];
    for (const product of this.products || []) {
      if (product.category.id === id) {
        results.push(product);
      }
    }
    this.products = results;
  }

  resetFilters() {
    this.getProducts();
  }

  sortProducts(sortOption: string) {
    switch (sortOption) {
      case 'nameAsc':
        // Sort products by name ascending
        break;
      case 'nameDesc':
        // Sort products by name descending
        break;
      case 'priceAsc':
        // Sort products by price ascending
        break;
      case 'priceDesc':
        // Sort products by price descending
        break;
    }
  }

}



