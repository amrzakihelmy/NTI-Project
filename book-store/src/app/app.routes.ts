import { Routes } from '@angular/router';
import { BookDetails } from './pages/book-details/book-details';
import { Wishlist } from './pages/wishlist/wishlist';

export const routes: Routes = [

  {
    path: 'books/:id',
    component: BookDetails
  },

  {
    path: 'wishlist',
    component: Wishlist
  }

];