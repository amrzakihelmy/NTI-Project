import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BookService } from '../../core/service/book.service';
import { WishlistService } from '../../core/service/wishlist.service';
import { CartService } from '../../core/service/cart.service';
import { Book } from '../../core/service/models/book.model';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './book-details.html',
  styleUrl: './book-details.css'
})
export class BookDetails implements OnInit {

  book: Book | undefined;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private wishlistService: WishlistService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.book = this.bookService.getBookById(id);

  }

  isInWishlist(): boolean {

    return this.book ? this.wishlistService.isInWishlist(this.book.id) : false;

  }

  toggleWishlist(): void {

    if (this.book) {
      this.wishlistService.toggleWishlist(this.book.id);
    }

  }

  isInCart(): boolean {

    return this.book ? this.cartService.isInCart(this.book.id) : false;

  }

  addToCart(): void {

    if (!this.book) {
      return;
    }

    if (!this.cartService.isInCart(this.book.id)) {
      this.cartService.addToCart(this.book.id);
    }

  }

}
