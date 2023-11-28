import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any[] = [];
  categories: any[] = [];
  p: number = 1;
  selectedProduct: any;

  showModal = false;
  constructor( private http: HttpClient,
    private router: Router,
    private cartService: CartService) { }

    ngOnInit(): void {
      this.loadProducts();
      this.loadCategories();
    }
  
    loadProducts() {
      this.http
        .get<any[]>('https://fakestoreapi.com/products')
        .subscribe((data) => {
          this.products = data;
        });
    }
  
    loadProductwithCategory(cat: string) {
      this.http
        .get<any[]>('https://fakestoreapi.com/products/category/' + cat)
        .subscribe((data) => {
          this.products = data;
        });
    }
  
    loadCategories() {
      this.http
        .get<any[]>('https://fakestoreapi.com/products/categories')
        .subscribe((data) => {
          this.categories = data;
        });
    }
  
    openProductModal(product: any) {
      this.selectedProduct = product;
      this.showModal = true;
    }
  
    closeProductDetail() {
      this.selectedProduct = null;
      this.showModal = false;
    }
  
    showProductDetail(productId: number): void {
      this.router.navigate(['/ecomm/product-detail', productId]);
    }
  
    addtoCart(productId: number, product: any) {
      console.log('product added to cart: ' + productId);
  
      this.cartService.addToCart(1, product).subscribe(
        (response) => {
          console.log('Added to cart:', response);
        },
        (error) => {
          console.error('Error adding to cart:', error);
        }
      );
    }
  
    openCart() {
      this.router.navigate(['/ecomm/cart']);
    }

}
