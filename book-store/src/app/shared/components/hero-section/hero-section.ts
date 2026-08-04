import { Component } from '@angular/core';
import { AuthService } from '../../../core/service/auth.service';
import { RouterLink } from '@angular/router';
import { Book } from '../../../core/service/models/book.model';
import { BookService } from '../../../core/service/book.service';
@Component({
  selector: 'app-hero-section',
  imports: [RouterLink],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
})
export class HeroSection {

  featuredBook!: Book;

  constructor(
    public authService: AuthService,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
 
    const books = this.bookService.getBooks();

    if (books.length > 0) {
      this.featuredBook = books[0];
    }

  }
 isLoggedIn(): boolean {
  return localStorage.getItem('currentUser') !== null;

}}