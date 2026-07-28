import { Component } from '@angular/core';
import { BookService } from '../../../core/service/book.service';
import { Book } from '../../../core/service/models/book.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-book',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './list-book.html',
  styleUrl: './list-book.css'
})
export class ListBook {

  constructor(private bookService: BookService) {}

  getBooks(): Book[] {

    return this.bookService.getBooks();

  }
  deleteBook(id: number): void {

  this.bookService.deleteBook(id);

}

}