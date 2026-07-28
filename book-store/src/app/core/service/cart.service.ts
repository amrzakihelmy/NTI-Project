import { Injectable } from '@angular/core';

export interface CartItem {
  bookId: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items: CartItem[] = [];

  constructor() {
    this.items = this.getCartItems();
  }

  getCartItems(): CartItem[] {

    return JSON.parse(localStorage.getItem('cart') || '[]');

  }

  saveCartItems(): void {

    localStorage.setItem('cart', JSON.stringify(this.items));

  }

  addToCart(bookId: number, quantity: number = 1): void {

    const existingItem = this.items.find(item => item.bookId === bookId);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({ bookId, quantity });
    }

    this.saveCartItems();

  }

  updateQuantity(bookId: number, quantity: number): void {

    const item = this.items.find(item => item.bookId === bookId);

    if (item) {

      if (quantity < 1) {
        this.removeFromCart(bookId);
      } else {
        item.quantity = quantity;
        this.saveCartItems();
      }

    }

  }

  removeFromCart(bookId: number): void {

    this.items = this.items.filter(item => item.bookId !== bookId);
    this.saveCartItems();

  }

  isInCart(bookId: number): boolean {

    return this.items.some(item => item.bookId === bookId);

  }

  getCartCount(): number {

    return this.items.reduce((total, item) => total + item.quantity, 0);

  }

  clearCart(): void {

    this.items = [];
    this.saveCartItems();

  }

}
