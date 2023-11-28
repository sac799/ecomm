import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'https://fakestoreapi.com/carts';
  constructor(private http: HttpClient) {}

  addToCart(
    userId: number,
    products: { productId: number; quantity: number }[]
  ): Observable<any> {
    const body = {
      userId: userId,
      date: new Date().toISOString(),
      products: products,
    };
    return this.http.post(this.apiUrl, body);
  }
}
