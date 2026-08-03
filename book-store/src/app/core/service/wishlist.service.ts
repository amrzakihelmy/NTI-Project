import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor() { }

  private getWishlistKey(): string {

    const currentUser = JSON.parse(
      localStorage.getItem('currentUser') || 'null'
    );

    return currentUser
      ? `wishlist_${currentUser.id}`
      : 'wishlist_guest';

  }

  getWishlistIds(): number[] {

    return JSON.parse(
      localStorage.getItem(this.getWishlistKey()) || '[]'
    );

  }

  private saveWishlistIds(ids: number[]): void {

    localStorage.setItem(
      this.getWishlistKey(),
      JSON.stringify(ids)
    );

  }


  isInWishlist(id: number): boolean {

    return this.getWishlistIds().includes(id);

  }


  addToWishlist(id: number): void {

    const ids = this.getWishlistIds();

    if (!ids.includes(id)) {

      ids.push(id);

      this.saveWishlistIds(ids);

    }

  }

  removeFromWishlist(id: number): void {

    const ids = this.getWishlistIds();

    const updatedIds = ids.filter(
      bookId => bookId !== id
    );

    this.saveWishlistIds(updatedIds);

  }

  toggleWishlist(id: number): void {

    if (this.isInWishlist(id)) {

      this.removeFromWishlist(id);

    } else {

      this.addToWishlist(id);

    }

  }

  clearWishlist(): void {

    this.saveWishlistIds([]);

  }

}