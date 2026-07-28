import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BookService } from '../../core/service/book.service';
import { WishlistService } from '../../core/service/wishlist.service';
import { Book } from '../../core/service/models/book.model';

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
    private wishlistService: WishlistService
  ) {}

  getWishlistBooks(): Book[] {

    const ids = this.wishlistService.getWishlistIds();

    return this.bookService.getBooks().filter(book => ids.includes(book.id));

  }

  removeFromWishlist(id: number): void {

    this.wishlistService.removeFromWishlist(id);

  }

}
