import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  private ids: number[] = [];

  constructor() {
    this.ids = this.getWishlistIds();
  }

  getWishlistIds(): number[] {

    return JSON.parse(localStorage.getItem('wishlist') || '[]');

  }

  saveWishlistIds(): void {

    localStorage.setItem('wishlist', JSON.stringify(this.ids));

  }

  isInWishlist(id: number): boolean {

    return this.ids.includes(id);

  }

  addToWishlist(id: number): void {

    if (!this.ids.includes(id)) {

      this.ids.push(id);
      this.saveWishlistIds();

    }

  }

  removeFromWishlist(id: number): void {

    this.ids = this.ids.filter(bookId => bookId !== id);
    this.saveWishlistIds();

  }

  toggleWishlist(id: number): void {

    if (this.isInWishlist(id)) {
      this.removeFromWishlist(id);
    } else {
      this.addToWishlist(id);
    }

  }

}
