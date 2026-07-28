import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BookService } from '../../core/service/book.service';
import { CartService } from '../../core/service/cart.service';
import { Book } from '../../core/service/models/book.model';

interface CartRow {
  book: Book;
  quantity: number;
}

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {

  constructor(
    private bookService: BookService,
    private cartService: CartService
  ) {}

  getCartRows(): CartRow[] {

    const items = this.cartService.getCartItems();
    const rows: CartRow[] = [];

    for (const item of items) {

      const book = this.bookService.getBookById(item.bookId);

      if (book) {
        rows.push({ book, quantity: item.quantity });
      }

    }

    return rows;

  }

  getTotal(): number {

    return this.getCartRows().reduce((sum, row) => sum + row.book.price * row.quantity, 0);

  }

  increaseQuantity(bookId: number, currentQuantity: number): void {

    this.cartService.updateQuantity(bookId, currentQuantity + 1);

  }

  decreaseQuantity(bookId: number, currentQuantity: number): void {

    this.cartService.updateQuantity(bookId, currentQuantity - 1);

  }

  removeFromCart(bookId: number): void {

    this.cartService.removeFromCart(bookId);

  }

}
