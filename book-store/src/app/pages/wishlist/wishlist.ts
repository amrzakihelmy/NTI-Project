import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BookService } from '../../core/service/book.service';
import { WishlistService } from '../../core/service/wishlist.service';
import { Book } from '../../core/service/models/book.model';
import { SearchService } from '../../core/service/search.service';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './wishlist.html',
  styleUrl: './wishlist.css'
})
export class Wishlist {

  constructor(
    private bookService: BookService,
    private wishlistService: WishlistService,
    private searchService: SearchService
  ) {}

  getWishlistBooks(): Book[] {
    const ids = this.wishlistService.getWishlistIds();
    const term = this.searchService.searchTerm().trim().toLowerCase();

    return this.bookService.getBooks()
      .filter(book => ids.includes(book.id))
      .filter(book =>
        !term ||
        book.title.toLowerCase().includes(term) ||
        book.author.toLowerCase().includes(term)
      );
  }

  removeFromWishlist(id: number): void {
    this.wishlistService.removeFromWishlist(id);
  }

  hasActiveSearch(): boolean {
    return this.searchService.searchTerm().trim().length > 0;
  }
}