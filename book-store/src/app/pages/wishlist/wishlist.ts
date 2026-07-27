import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './wishlist.html',
  styleUrl: './wishlist.css'
})
export class Wishlist {

  wishlistBooks = [
    {
      id: 1,
      title: 'Atomic Habits',
      author: 'James Clear',
      price: 25,
      image: 'https://images-na.ssl-images-amazon.com/images/I/81F90H7hnML.jpg'
    },
    {
      id: 2,
      title: 'Think and Grow Rich',
      author: 'Napoleon Hill',
      price: 16.99,
      image: 'https://m.media-amazon.com/images/I/71UypkUjStL._SL1500_.jpg'
    },
    {
      id: 3,
      title: 'Rich Dad Poor Dad',
      author: 'Robert Kiyosaki',
      price: 18,
      image: 'https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL.jpg'
    }
  ];

}