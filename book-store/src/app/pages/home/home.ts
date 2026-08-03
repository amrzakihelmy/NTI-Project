import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Nav } from '../../shared/components/nav/nav';
import { Footer } from '../../shared/components/footer/footer';
import { BookService } from '../../core/service/book.service';
import { WishlistService } from '../../core/service/wishlist.service';
import { CartService } from '../../core/service/cart.service';
import { SearchService } from '../../core/service/search.service';
import { Book } from '../../core/service/models/book.model';
import { AuthService } from '../../core/service/auth.service';
import {ContactUs}from '../../shared/components/contact-us/contact-us';
import { HeroSection } from '../../shared/components/hero-section/hero-section';
import { NgxPaginationModule } from 'ngx-pagination';
@Component({
  selector: 'app-home',
  imports: [Nav, Footer, RouterLink,ContactUs,HeroSection,NgxPaginationModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
isLogged=false;
ngOnInit() {

   this.isLogged= this.authService.isLoggedIn();

}
  constructor(
    private bookService: BookService,
    private wishlistService: WishlistService,
    private authService:AuthService,
    private cartService: CartService,
    private searchService: SearchService
  ) {}

  getBooks(): Book[] {

    const term = this.searchService.searchTerm().trim().toLowerCase();
    const books = this.bookService.getBooks();

    if (!term) {
      return books;
    }

    return books.filter(book =>
      book.title.toLowerCase().includes(term) ||
      book.author.toLowerCase().includes(term)
    );

  }

  isInWishlist(id: number): boolean {

    return this.wishlistService.isInWishlist(id);

  }

  toggleWishlist(id: number): void {

    this.wishlistService.toggleWishlist(id);

  }

  hasActiveSearch(): boolean {

    return this.searchService.searchTerm().trim().length > 0;

  }

  isInCart(id: number): boolean {

    return this.cartService.isInCart(id);

  }

  addToCart(id: number): void {

    if (!this.cartService.isInCart(id)) {
      this.cartService.addToCart(id);
    }

  }

}
