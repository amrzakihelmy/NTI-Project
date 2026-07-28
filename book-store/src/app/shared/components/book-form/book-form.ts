import { Component, Input, OnInit } from '@angular/core';
import { Book} from '../../../core/service/models/book.model';
import { BookService } from '../../../core/service/book.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-book-form',
  standalone:true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './book-form.html',
  styleUrl: './book-form.css',
})
export class BookForm implements OnInit {
  @Input() mode: 'add' | 'edit' = 'add';

book: Book = {
  id:0,
  title: '',
  author: '',
  category: '',
  price: 0,
  stock: 0,
  description: '',
  image: '',
  status: 'available'
};
  constructor(
    private bookService:BookService,
    private router: Router,
    private route: ActivatedRoute

  ) {}

  ngOnInit(): void {

    if (this.mode === 'edit') {

      const id = Number(this.route.snapshot.paramMap.get('id'));
      const existingBook = this.bookService.getBookById(id);

      if (existingBook) {
        this.book = { ...existingBook };
      }

    }

  }
  uploadImage(event: Event): void {

  const input = event.target as HTMLInputElement;

  if (!input.files?.length) return;

  const file = input.files[0];

  const reader = new FileReader();

  reader.onload = () => {

    this.book.image = reader.result as string;

  };

  reader.readAsDataURL(file);

}
submit() {

  if (this.mode === 'add') {

    console.log('Book Added :', this.book);

    this.bookService.addBook(this.book);

  } else {

    console.log('Book Updated :', this.book);

    this.bookService.updateBook(this.book);

  }
 this.router.navigate(['/admin/list-books']);
}
deleteBook(id: number) {

  this.bookService.deleteBook(id);

}
 
}
