import { Injectable } from '@angular/core';
import { Book } from './models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books: Book[] = [];

  constructor() {

    this.books = this.getBooks();

  }
  getBooks(): Book[] {

    return JSON.parse(localStorage.getItem('books') || '[]');

  }

  saveBooks(): void {

    localStorage.setItem('books', JSON.stringify(this.books));

  }
addBook(book:Book):void{
const maxId = this.books.length
  ? Math.max(...this.books.map(book => book.id))
  : 0;

book.id = maxId + 1;
this.books.push(book);
this.saveBooks();

  }
 deleteBook(id: number): void {

  this.books = this.books.filter(book => book.id !== id);

  this.saveBooks();

}
getBookById(id: number): Book | undefined {

  return this.books.find(book => book.id === id);

}

updateBook(book: Book): void {

  const index = this.books.findIndex(item => item.id === book.id);

  if (index !== -1) {

    this.books[index] = book;

    this.saveBooks();

  }

}

 

 


}