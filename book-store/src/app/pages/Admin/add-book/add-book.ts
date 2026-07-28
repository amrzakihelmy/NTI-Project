import { Component } from '@angular/core';
import { BookForm } from '../../../shared/components/book-form/book-form';
@Component({
  selector: 'app-add-book',
  imports: [BookForm],
  templateUrl: './add-book.html',
  styleUrl: './add-book.css',
})
export class AddBook {}
