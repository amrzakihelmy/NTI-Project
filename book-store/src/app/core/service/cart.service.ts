import { Injectable } from '@angular/core';

export interface CartItem {
  bookId: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }


  private getCartKey(): string {

    const currentUser = JSON.parse(
      localStorage.getItem('currentUser') || 'null'
    );

    return currentUser
      ? `cart_${currentUser.id}`
      : 'cart_guest';

  }

  getCartItems(): CartItem[] {

    return JSON.parse(
      localStorage.getItem(this.getCartKey()) || '[]'
    );

  }

  
  private saveCartItems(items: CartItem[]): void {

    localStorage.setItem(
      this.getCartKey(),
      JSON.stringify(items)
    );

  }

 
  addToCart(bookId: number, quantity: number = 1): void {

    const items = this.getCartItems();

    const existingItem = items.find(
      item => item.bookId === bookId
    );

    if (existingItem) {

      existingItem.quantity += quantity;

    } else {

      items.push({
        bookId,
        quantity
      });

    }

    this.saveCartItems(items);

  }


  updateQuantity(bookId: number, quantity: number): void {

    const items = this.getCartItems();

    const item = items.find(
      item => item.bookId === bookId
    );

    if (!item) return;

    if (quantity < 1) {

      this.removeFromCart(bookId);

      return;
    }

    item.quantity = quantity;

    this.saveCartItems(items);

  }


  removeFromCart(bookId: number): void {

    const items = this.getCartItems();

    const updatedItems = items.filter(
      item => item.bookId !== bookId
    );

    this.saveCartItems(updatedItems);

  }

  
  isInCart(bookId: number): boolean {

    return this.getCartItems().some(
      item => item.bookId === bookId
    );

  }


  getCartCount(): number {

    return this.getCartItems().reduce(

      (total, item) => total + item.quantity,

      0

    );

  }

  
  clearCart(): void {

    this.saveCartItems([]);

  }

}