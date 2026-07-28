import { Component } from '@angular/core';
import {BookForm}from'../../../shared/components/book-form/book-form';
@Component({
  selector: 'app-update-book',
  imports: [BookForm],
  templateUrl: './update-book.html',
  styleUrl: './update-book.css',
})
export class UpdateBook {}
