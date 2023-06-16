import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Product[] = [];

  addToCart(product: Product) {
    this.cartItems.push(product);
  }

  removeFromCart(product: Product) {
    const index = this.cartItems.findIndex(item => item.id === product.id);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }

  getCartItems(): Product[] {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
  }
}
